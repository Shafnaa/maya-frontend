import { postType, userType } from "@/app/types/type";

export const posts: postType[] = [
  {
    id: "33c2d05f0dbf6608",
    title: "Freelance Project",
    userId: "11302b37a750b6d6",
    category: "project",
    tags: ["Technology", "Business", "Design", "Freelance"],
    createdAt: new Date(),
  },
  {
    id: "eb962964735f85cd",
    title: "PKM IoT Pertanian",
    userId: "7b63ed93bce73f32",
    category: "competition",
    tags: ["Technology", "Agriculture", "Business", "PKM"],
    createdAt: new Date(),
  },
  {
    id: "d9375de5cecd11bb",
    title: "Kontes Robot ABU Indonesia 2024",
    userId: "b641197346b58df2",
    category: "competition",
    tags: ["Technology", "Robot", "KRAI", "SRT"],
    createdAt: new Date(),
  },
  {
    id: "4cda028d4454f1b1",
    title: "Hackfest 2024",
    userId: "6baba791810b3787",
    category: "competition",
    tags: ["Technology", "Business", "Design", "Hackfest"],
    createdAt: new Date(),
  },
  {
    id: "fb5f76237e027257",
    title: "Company Website",
    userId: "11302b37a750b6d6",
    category: "project",
    tags: ["Technology", "Business", "Design", "Freelance"],
    createdAt: new Date(),
  },
];

export const users: userType[] = [
  {
    id: "11302b37a750b6d6",
    name: "Saujana Shafi",
    email: "saujana@shafi.com",
    password: "$2a$12$9wk2PzyB8A3TkYPqD9wymOB8WvmgIcjuCBSjTCEqbiPPR/3PTlJ8i",
    majors: {
      name: "Hubungan Internasional",
      faculty: "Ilmu Sosial & Politik",
    },
    imageUrl: "/saujana.jpg",
  },
  {
    id: "7b63ed93bce73f32",
    name: "Naufal Hakim",
    email: "naufal@hakim.com",
    password: "$2a$12$r1s5IynMwUtAc7D3uE5H8OgOAsq/uFgMJM0XZ4hMXbF71VBcc/ETC",
    majors: {
      name: "Teknik Elektro",
      faculty: "Teknik",
    },
    imageUrl: "/nopal.jpeg",
  },
  {
    id: "b641197346b58df2",
    name: "Daffa Randika",
    email: "daffa@randika.com",
    password: "$2a$12$mr/2yxzqOtUIBqG2Kujk4ui3jTd6Fun5ml3OKKJvSQ/t09RgnsnOS",
    majors: {
      name: "Matematika",
      faculty: "Matematika & IPA",
    },
    imageUrl: "/daffa.jpeg",
  },
  {
    id: "6baba791810b3787",
    name: "Bijak Bestari",
    email: "bijak@bestari.com",
    password: "$2a$12$uFBm7uLOD1gvKpRVtnQot.oQW72CfRd.nErR8zQh44qmrwgsOMNLK",
    majors: {
      name: "Bahasa Inggris",
      faculty: "Ilmu & Budaya",
    },
    imageUrl: "/bijak.jpeg",
  },
];

export const bookmarks = [
  {
    id: 1,
    userId: "6baba791810b3787",
    postId: "eb962964735f85cd",
  },
];

export const myPosts = [
  {
    id: 1,
    userId: "6baba791810b3787",
    postId: "4cda028d4454f1b1",
  },
];

export const myRequests = [
  {
    id: 1,
    userId: "6baba791810b3787",
    postId: "eb962964735f85cd",
  },
];
