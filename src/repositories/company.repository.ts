import { prisma } from "@/lib/prisma/client";

export class CompanyRepository {
  async findById(id: string) {
    return prisma.company.findUnique({
      where: {
        id,
      },
    });
  }

  async create(data: any) {
    return prisma.company.create({
      data,
    });
  }

  async update(id: string, data: any) {
    return prisma.company.update({
      where: {
        id,
      },
      data,
    });
  }
}

export const companyRepository = new CompanyRepository();