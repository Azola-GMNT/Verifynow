"use client";

import {
  createContext,
  useContext,
  useMemo,
  useState,
  ReactNode,
} from "react";

import { VerificationCase } from "@/types/verification";

import {
  createVerificationCase,
  updateVerificationCase,
  deleteVerificationCase,
  getAllVerificationCases,
} from "@/services/verificationService";

interface VerificationContextType {
  verifications: VerificationCase[];

  create: (verification: VerificationCase) => void;

  update: (
    verificationId: string,
    updates: Partial<VerificationCase>
  ) => void;

  remove: (verificationId: string) => void;

  refresh: () => void;
}

const VerificationContext =
  createContext<VerificationContextType | null>(null);

export function VerificationProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [, forceRefresh] = useState(0);

  const refresh = () => {
    forceRefresh((value) => value + 1);
  };

  const create = (
    verification: VerificationCase
  ) => {
    createVerificationCase(verification);

    refresh();
  };

  const update = (
    verificationId: string,
    updates: Partial<VerificationCase>
  ) => {
    updateVerificationCase(
      verificationId,
      updates
    );

    refresh();
  };

  const remove = (
    verificationId: string
  ) => {
    deleteVerificationCase(
      verificationId
    );

    refresh();
  };

  const value = useMemo(
    () => ({
      verifications:
        getAllVerificationCases(),

      create,

      update,

      remove,

      refresh,
    }),
    [refresh]
  );

  return (
    <VerificationContext.Provider value={value}>
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