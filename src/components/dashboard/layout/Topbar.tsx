"use client";

import { Bell, Search, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useCurrentUser } from "@/hooks/useCurrentUser";

interface Notification {
  id: string;
  title: string;
  message: string;
  type: string;
  read: boolean;
  link: string | null;
  createdAt: string;
}

export default function Topbar() {
  const { user, loading } = useCurrentUser();

  const [notifications, setNotifications] = useState<
    Notification[]
  >([]);

  const [unreadCount, setUnreadCount] = useState(0);

  const [showNotifications, setShowNotifications] =
    useState(false);

  const [loadingNotifications, setLoadingNotifications] =
    useState(false);

  const firstName = user?.firstName?.trim();

  async function loadNotifications() {
    try {
      setLoadingNotifications(true);

      const response = await fetch(
        "/api/notifications",
        {
          method: "GET",
          credentials: "include",
        }
      );

      if (!response.ok) {
        return;
      }

      const data = await response.json();

      setNotifications(data.notifications ?? []);
      setUnreadCount(data.unreadCount ?? 0);
    } catch (error) {
      console.error(
        "Failed to load notifications:",
        error
      );
    } finally {
      setLoadingNotifications(false);
    }
  }

  useEffect(() => {
    if (user) {
      loadNotifications();
    }
  }, [user]);

  function formatTime(dateString: string) {
    const date = new Date(dateString);
    const now = new Date();

    const difference =
      now.getTime() - date.getTime();

    const minutes = Math.floor(
      difference / (1000 * 60)
    );

    if (minutes < 1) {
      return "Just now";
    }

    if (minutes < 60) {
      return `${minutes}m ago`;
    }

    const hours = Math.floor(minutes / 60);

    if (hours < 24) {
      return `${hours}h ago`;
    }

    const days = Math.floor(hours / 24);

    if (days < 7) {
      return `${days}d ago`;
    }

    return date.toLocaleDateString();
  }

  async function openNotification(
  notification: Notification
) {
  // Update the UI immediately
  setNotifications((current) =>
    current.map((item) =>
      item.id === notification.id
        ? { ...item, read: true }
        : item
    )
  );

  if (!notification.read) {
    setUnreadCount((current) =>
      Math.max(0, current - 1)
    );

    // Persist read status in the database
    try {
      const response = await fetch(
        `/api/notifications/${notification.id}/read`,
        {
          method: "PATCH",
          credentials: "include",
        }
      );

      if (!response.ok) {
        console.error(
          "Failed to mark notification as read"
        );
      }
    } catch (error) {
      console.error(
        "Failed to mark notification as read:",
        error
      );
    }
  }

  if (notification.link) {
    window.location.href =
      notification.link;
  }
}

  return (
    <header className="relative flex h-20 items-center justify-between border-b border-slate-200 bg-white px-8">
      <div>
        <h2 className="text-2xl font-bold">
          {loading
            ? "Hello 👋"
            : `Hello, ${firstName || "User"} 👋`}
        </h2>

        <p className="text-slate-500">
          Welcome back to VerifyNow
        </p>
      </div>

      <div className="flex items-center gap-6">
        {/* Search */}
        <button
          type="button"
          className="rounded-xl bg-slate-100 p-3 transition hover:bg-slate-200"
          aria-label="Search"
        >
          <Search className="h-5 w-5" />
        </button>

        {/* Notifications */}
        <div className="relative">
          <button
            type="button"
            onClick={() => {
              setShowNotifications(
                (current) => !current
              );

              if (!showNotifications) {
                loadNotifications();
              }
            }}
            className="relative rounded-xl bg-slate-100 p-3 transition hover:bg-slate-200"
            aria-label="Notifications"
          >
            <Bell className="h-5 w-5" />

            {unreadCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#BF5000] px-1 text-[10px] font-bold text-white">
                {unreadCount > 9
                  ? "9+"
                  : unreadCount}
              </span>
            )}
          </button>

          {/* Notification panel */}
          {showNotifications && (
            <div className="absolute right-0 top-14 z-50 w-96 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
              {/* Panel header */}
              <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
                <div>
                  <h3 className="font-semibold text-slate-900">
                    Notifications
                  </h3>

                  <p className="mt-1 text-xs text-slate-500">
                    {unreadCount > 0
                      ? `${unreadCount} unread`
                      : "You're all caught up"}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    setShowNotifications(false)
                  }
                  className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
                  aria-label="Close notifications"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Notifications */}
              <div className="max-h-[420px] overflow-y-auto">
                {loadingNotifications ? (
                  <div className="px-5 py-10 text-center text-sm text-slate-500">
                    Loading notifications...
                  </div>
                ) : notifications.length ===
                  0 ? (
                  <div className="px-5 py-10 text-center">
                    <Bell className="mx-auto h-8 w-8 text-slate-300" />

                    <p className="mt-3 text-sm font-medium text-slate-700">
                      No notifications
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      You don't have any notifications yet.
                    </p>
                  </div>
                ) : (
                  notifications.map(
                    (notification) => (
                      <button
                        key={notification.id}
                        type="button"
                        onClick={() =>
                          openNotification(
                            notification
                          )
                        }
                        className={`w-full border-b border-slate-100 px-5 py-4 text-left transition hover:bg-slate-50 ${
                          !notification.read
                            ? "bg-orange-50/50"
                            : "bg-white"
                        }`}
                      >
                        <div className="flex gap-3">
                          <div
                            className={`mt-1 h-2.5 w-2.5 shrink-0 rounded-full ${
                              notification.read
                                ? "bg-slate-200"
                                : "bg-[#BF5000]"
                            }`}
                          />

                          <div className="min-w-0 flex-1">
                            <div className="flex items-start justify-between gap-3">
                              <p
                                className={`text-sm ${
                                  notification.read
                                    ? "font-medium text-slate-700"
                                    : "font-semibold text-slate-900"
                                }`}
                              >
                                {notification.title}
                              </p>

                              <span className="shrink-0 text-[11px] text-slate-400">
                                {formatTime(
                                  notification.createdAt
                                )}
                              </span>
                            </div>

                            <p className="mt-1 text-xs leading-5 text-slate-500">
                              {notification.message}
                            </p>
                          </div>
                        </div>
                      </button>
                    )
                  )
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}