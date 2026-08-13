"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  ReactNode,
} from "react";

import { VerificationCase } from "@/types/verification";

interface VerificationContextType {
  verifications: VerificationCase[];

  create: (
    verification: VerificationCase
  ) => Promise<void>;

  update: (
    verificationId: string,
    updates: Partial<VerificationCase>
  ) => Promise<void>;

  remove: (
    verificationId: string
  ) => Promise<void>;

  refresh: () => Promise<void>;
}

const VerificationContext =
  createContext<VerificationContextType | null>(
    null
  );

export function VerificationProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [verifications, setVerifications] =
    useState<VerificationCase[]>([]);

  const refresh = async () => {
    try {
      const response = await fetch(
        "/api/verifications"
      );

      if (!response.ok) {
        throw new Error(
          "Failed to load verifications"
        );
      }

      const data =
        await response.json();

      setVerifications(data);
    } catch (error) {
      console.error(
        "Failed to load verification cases:",
        error
      );
    }
  };

  useEffect(() => {
    refresh();
  }, []);

  const create = async (
    verification: VerificationCase
  ) => {
    const response = await fetch(
      "/api/verifications",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(
          verification
        ),
      }
    );

    if (!response.ok) {
      throw new Error(
        "Failed to create verification"
      );
    }

    await refresh();
  };

  const update = async (
    verificationId: string,
    updates: Partial<VerificationCase>
  ) => {
    const response = await fetch(
      `/api/verifications/${verificationId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(
          updates
        ),
      }
    );

    if (!response.ok) {
      throw new Error(
        "Failed to update verification"
      );
    }

    await refresh();
  };

  const remove = async (
    verificationId: string
  ) => {
    const response = await fetch(
      `/api/verifications/${verificationId}`,
      {
        method: "DELETE",
      }
    );

    if (!response.ok) {
      throw new Error(
        "Failed to delete verification"
      );
    }

    await refresh();
  };

  const value = useMemo(
    () => ({
      verifications,
      create,
      update,
      remove,
      refresh,
    }),
    [verifications]
  );

  return (
    <VerificationContext.Provider
      value={value}
    >
      {children}
    </VerificationContext.Provider>
  );
}

export function useVerification() {
  const context =
    useContext(VerificationContext);

  if (!context) {
    throw new Error(
      "useVerification must be used inside VerificationProvider"
    );
  }

  return context;
}