import {
  WhatsApp,
  Twitter,
  Instagram,
  Spotify,
  Linkedin,
  Youtube,
  Google,
  Facebook,
  CodeWave,
} from "../assets";

export const jobTypes = ["Theo giờ", "Theo ngày", "Theo tuần", "Theo tháng"];

export const experience = [
  {title: "Dưới 1 năm", value: "0-1"},
  {title: "Từ 1 - 2 năm", value: "1-2"},
  {title: "Từ 2 - 6 năm", value: "2-6"},
  {title: "Trên 6 năm", value: "6"},
];

export const popularSearch = [
  "Software Engineer",
  "Developer",
  "Full-Stack Developer",
  "Data Scientist",
  "Remote",
  "Full-Time",
  "Sales",
  "Office Assistant",
];

export const jobs = [
  {
    id: "1",
    company: {
      name: "Microsoft Corporation",
      location: "Việt Nam",
      email: "support@Speedjob.com",
      contact: "support@microsoft",
      about:
        "Nhân viên marketing: Nhân viên marketing là người chịu trách nhiệm xây dựng và triển khai các chiến lược marketing nhằm quảng bá sản phẩm hoặc dịch vụ của doanh nghiệp đến với khách hàng.",
      profileUrl: Twitter,
    },
    jobTitle: "Software Engineer",
    location: "West US",
    jobType: "Full-Time",
    salary: "1200",
    detail: [
      {
        desc: "Nhân viên marketing: Nhân viên marketing là người chịu trách nhiệm xây dựng và triển khai các chiến lược marketing nhằm quảng bá sản phẩm hoặc dịch vụ của doanh nghiệp đến với khách hàng.",

        requirement:
          "Nhân viên marketing: Nhân viên marketing là người chịu trách nhiệm xây dựng và triển khai các chiến lược marketing nhằm quảng bá sản phẩm hoặc dịch vụ của doanh nghiệp đến với khách hàng.",
      },
    ],
    applicants: ["1", "2", "3", "4"],
    vacancies: 25,
    createdAt: new Date(),
  },
  {
    id: "2",
    company: {
      name: "Google Corporation",
      location: "Việt Nam",
      email: "support@Speedjob.com",
      contact: "support@google",
      about:
        "Nhân viên marketing: Nhân viên marketing là người chịu trách nhiệm xây dựng và triển khai các chiến lược marketing nhằm quảng bá sản phẩm hoặc dịch vụ của doanh nghiệp đến với khách hàng.",
      profileUrl: Google,
    },
    jobTitle: "System Analyst",
    location: "New York",
    jobType: "Full-Time",
    salary: "1200",
    detail: [
      {
        desc: "Nhân viên marketing: Nhân viên marketing là người chịu trách nhiệm xây dựng và triển khai các chiến lược marketing nhằm quảng bá sản phẩm hoặc dịch vụ của doanh nghiệp đến với khách hàng.",

        requirement:
          "Nhân viên marketing: Nhân viên marketing là người chịu trách nhiệm xây dựng và triển khai các chiến lược marketing nhằm quảng bá sản phẩm hoặc dịch vụ của doanh nghiệp đến với khách hàng.",
      },
    ],
    applicants: ["1", "2", "3", "4"],
    vacancies: 25,
    createdAt: new Date(),
  },
  {
    id: "3",
    company: {
      name: "LinkedIn Corporation",
      location: "Việt Nam",
      email: "support@Speedjob.com",
      contact: "support@microsoft",
      about:
        "Nhân viên marketing: Nhân viên marketing là người chịu trách nhiệm xây dựng và triển khai các chiến lược marketing nhằm quảng bá sản phẩm hoặc dịch vụ của doanh nghiệp đến với khách hàng.",
      profileUrl: Linkedin,
    },
    jobTitle: "Social Meia Manager",
    location: "Việt Nam, Mumbai",
    jobType: "Full-Time",
    salary: "1200",
    detail: [
      {
        desc: "Nhân viên marketing: Nhân viên marketing là người chịu trách nhiệm xây dựng và triển khai các chiến lược marketing nhằm quảng bá sản phẩm hoặc dịch vụ của doanh nghiệp đến với khách hàng.",

        requirement:
          "Nhân viên marketing: Nhân viên marketing là người chịu trách nhiệm xây dựng và triển khai các chiến lược marketing nhằm quảng bá sản phẩm hoặc dịch vụ của doanh nghiệp đến với khách hàng.",
      },
    ],
    applicants: ["1", "2", "3", "4"],
    vacancies: 25,
    createdAt: new Date(),
  },
  {
    id: "4",
    company: {
      name: "Spotify Corporation",
      location: "Việt Nam",
      email: "support@Speedjob.com",
      contact: "support@microsoft",
      about:
        "Nhân viên marketing: Nhân viên marketing là người chịu trách nhiệm xây dựng và triển khai các chiến lược marketing nhằm quảng bá sản phẩm hoặc dịch vụ của doanh nghiệp đến với khách hàng.",
      profileUrl: Spotify,
    },
    jobTitle: "CFO",
    location: "Norway",
    jobType: "Full-Time",
    salary: "1200",
    detail: [
      {
        desc: "Nhân viên marketing: Nhân viên marketing là người chịu trách nhiệm xây dựng và triển khai các chiến lược marketing nhằm quảng bá sản phẩm hoặc dịch vụ của doanh nghiệp đến với khách hàng.",

        requirement:
          "Nhân viên marketing: Nhân viên marketing là người chịu trách nhiệm xây dựng và triển khai các chiến lược marketing nhằm quảng bá sản phẩm hoặc dịch vụ của doanh nghiệp đến với khách hàng.",
      },
    ],
    applicants: ["1", "2", "3", "4"],
    vacancies: 25,
    createdAt: new Date(),
  },
  {
    id: "5",
    company: {
      name: "Facebook Corporation",
      location: "Việt Nam",
      email: "support@Speedjob.com",
      contact: "support@microsoft",
      about:
        "Nhân viên marketing: Nhân viên marketing là người chịu trách nhiệm xây dựng và triển khai các chiến lược marketing nhằm quảng bá sản phẩm hoặc dịch vụ của doanh nghiệp đến với khách hàng.",
      profileUrl: Facebook,
    },
    jobTitle: "CFO",
    location: "Norway",
    jobType: "Full-Time",
    salary: "1200",
    detail: [
      {
        desc: "Nhân viên marketing: Nhân viên marketing là người chịu trách nhiệm xây dựng và triển khai các chiến lược marketing nhằm quảng bá sản phẩm hoặc dịch vụ của doanh nghiệp đến với khách hàng.",

        requirement:
          "Nhân viên marketing: Nhân viên marketing là người chịu trách nhiệm xây dựng và triển khai các chiến lược marketing nhằm quảng bá sản phẩm hoặc dịch vụ của doanh nghiệp đến với khách hàng.",
      },
    ],
    applicants: ["1", "2", "3", "4"],
    vacancies: 25,
    createdAt: new Date(),
  },
  {
    id: "6",
    company: {
      name: "WhatsApp Corporation",
      location: "Việt Nam",
      email: "support@Speedjob.com",
      contact: "support@microsoft",
      about:
        "Nhân viên marketing: Nhân viên marketing là người chịu trách nhiệm xây dựng và triển khai các chiến lược marketing nhằm quảng bá sản phẩm hoặc dịch vụ của doanh nghiệp đến với khách hàng.",
      profileUrl: WhatsApp,
    },
    jobTitle: "Product Manager",
    location: "Norway",
    jobType: "Full-Time",
    salary: "1200",
    detail: [
      {
        desc: "Nhân viên marketing: Nhân viên marketing là người chịu trách nhiệm xây dựng và triển khai các chiến lược marketing nhằm quảng bá sản phẩm hoặc dịch vụ của doanh nghiệp đến với khách hàng.",

        requirement:
          "Nhân viên marketing: Nhân viên marketing là người chịu trách nhiệm xây dựng và triển khai các chiến lược marketing nhằm quảng bá sản phẩm hoặc dịch vụ của doanh nghiệp đến với khách hàng.",
      },
    ],
    applicants: ["1", "2", "3", "4"],
    vacancies: 25,
    createdAt: new Date(),
  },
  {
    id: "7",
    company: {
      name: "Instagram Corporation",
      location: "Việt Nam",
      email: "support@Speedjob.com",
      contact: "support@microsoft",
      about:
        "Nhân viên marketing: Nhân viên marketing là người chịu trách nhiệm xây dựng và triển khai các chiến lược marketing nhằm quảng bá sản phẩm hoặc dịch vụ của doanh nghiệp đến với khách hàng.",
      profileUrl: Instagram,
    },
    jobTitle: "Product Manager",
    location: "Norway",
    jobType: "Full-Time",
    salary: "1200",
    detail: [
      {
        desc: "Nhân viên marketing: Nhân viên marketing là người chịu trách nhiệm xây dựng và triển khai các chiến lược marketing nhằm quảng bá sản phẩm hoặc dịch vụ của doanh nghiệp đến với khách hàng.",

        requirement:
          "Nhân viên marketing: Nhân viên marketing là người chịu trách nhiệm xây dựng và triển khai các chiến lược marketing nhằm quảng bá sản phẩm hoặc dịch vụ của doanh nghiệp đến với khách hàng.",
      },
    ],
    applicants: ["1", "2", "3", "4"],
    vacancies: 25,
    createdAt: new Date(),
  },
  {
    id: "8",
    company: {
      name: "Youtube Corporation",
      location: "Việt Nam",
      email: "support@Speedjob.com",
      contact: "support@microsoft",
      about:
        "Nhân viên marketing: Nhân viên marketing là người chịu trách nhiệm xây dựng và triển khai các chiến lược marketing nhằm quảng bá sản phẩm hoặc dịch vụ của doanh nghiệp đến với khách hàng.",
      profileUrl: Youtube,
    },
    jobTitle: "Product Manager",
    location: "Norway",
    jobType: "Full-Time",
    salary: "1200",
    detail: [
      {
        desc: "Nhân viên marketing: Nhân viên marketing là người chịu trách nhiệm xây dựng và triển khai các chiến lược marketing nhằm quảng bá sản phẩm hoặc dịch vụ của doanh nghiệp đến với khách hàng.",

        requirement:
          "Nhân viên marketing: Nhân viên marketing là người chịu trách nhiệm xây dựng và triển khai các chiến lược marketing nhằm quảng bá sản phẩm hoặc dịch vụ của doanh nghiệp đến với khách hàng.",
      },
    ],
    applicants: ["1", "2", "3", "4"],
    vacancies: 25,
    createdAt: new Date(),
  },
  {
    id: "9",
    company: {
      name: "CodeWave Solutions",
      location: "Việt Nam",
      email: "support@Speedjob.com",
      contact: "support@microsoft",
      about:
        "Nhân viên marketing: Nhân viên marketing là người chịu trách nhiệm xây dựng và triển khai các chiến lược marketing nhằm quảng bá sản phẩm hoặc dịch vụ của doanh nghiệp đến với khách hàng.",
      profileUrl: CodeWave,
    },
    jobTitle: "Subscribe Please",
    location: "Norway",
    jobType: "Full-Time",
    salary: "1200",
    detail: [
      {
        desc: "Nhân viên marketing: Nhân viên marketing là người chịu trách nhiệm xây dựng và triển khai các chiến lược marketing nhằm quảng bá sản phẩm hoặc dịch vụ của doanh nghiệp đến với khách hàng.",

        requirement:
          "Nhân viên marketing: Nhân viên marketing là người chịu trách nhiệm xây dựng và triển khai các chiến lược marketing nhằm quảng bá sản phẩm hoặc dịch vụ của doanh nghiệp đến với khách hàng.",
      },
    ],
    applicants: ["1", "2", "3", "4"],
    vacancies: 25,
    createdAt: new Date(),
  },
];

export const footerLinks = [
  {
    id: "01",
    title: "Company",
    links: ["Home", "About Us", "Serjobes", "Our Team"],
  },
  {
    id: "02",
    title: "Policy",
    links: ["Policies", "Contact", "FAQ"],
  },
  {
    id: "03",
    title: "Support",
    links: ["Account", "Support Center", "Feedback", "Accessibility"],
  },
];

export const companies = [
  {
    _id: 1,
    name: "Microsoft Corporation",
    location: "Việt Nam",
    email: "support@Speedjob.com",
    contact: "support@microsoft",
    about:
      "Nhân viên marketing: Nhân viên marketing là người chịu trách nhiệm xây dựng và triển khai các chiến lược marketing nhằm quảng bá sản phẩm hoặc dịch vụ của doanh nghiệp đến với khách hàng.",
    profileUrl: Twitter,
    jobPosts: ["1", "2"],
  },
  {
    _id: 2,
    name: "Google Corporation",
    location: "Việt Nam",
    email: "support@Speedjob.com",
    contact: "support@google",
    about:
      "Nhân viên marketing: Nhân viên marketing là người chịu trách nhiệm xây dựng và triển khai các chiến lược marketing nhằm quảng bá sản phẩm hoặc dịch vụ của doanh nghiệp đến với khách hàng.",
    profileUrl: Google,
    jobPosts: ["1", "2"],
  },
  {
    _id: 3,
    name: "LinkedIn Corporation",
    location: "Việt Nam",
    email: "support@Speedjob.com",
    contact: "support@microsoft",
    about:
      "Nhân viên marketing: Nhân viên marketing là người chịu trách nhiệm xây dựng và triển khai các chiến lược marketing nhằm quảng bá sản phẩm hoặc dịch vụ của doanh nghiệp đến với khách hàng.",
    profileUrl: Linkedin,
    jobPosts: ["1", "2"],
  },
  {
    _id: 4,
    name: "Spotify Corporation",
    location: "Việt Nam",
    email: "support@Speedjob.com",
    contact: "support@microsoft",
    about:
      "Nhân viên marketing: Nhân viên marketing là người chịu trách nhiệm xây dựng và triển khai các chiến lược marketing nhằm quảng bá sản phẩm hoặc dịch vụ của doanh nghiệp đến với khách hàng.",
    profileUrl: Spotify,
    jobPosts: ["1", "2"],
  },
  {
    _id: 5,
    name: "Facebook Corporation",
    location: "Việt Nam",
    email: "support@Speedjob.com",
    contact: "support@microsoft",
    about:
      "Nhân viên marketing: Nhân viên marketing là người chịu trách nhiệm xây dựng và triển khai các chiến lược marketing nhằm quảng bá sản phẩm hoặc dịch vụ của doanh nghiệp đến với khách hàng.",
    profileUrl: Facebook,
    jobPosts: ["1", "2"],
  },
  {
    _id: 6,
    name: "WhatsApp Corporation",
    location: "Việt Nam",
    email: "support@Speedjob.com",
    contact: "support@microsoft",
    about:
      "Nhân viên marketing: Nhân viên marketing là người chịu trách nhiệm xây dựng và triển khai các chiến lược marketing nhằm quảng bá sản phẩm hoặc dịch vụ của doanh nghiệp đến với khách hàng.",
    profileUrl: WhatsApp,
    jobPosts: ["1", "2"],
  },
  {
    _id: 7,
    name: "Instagram Corporation",
    location: "Việt Nam",
    email: "support@Speedjob.com",
    contact: "support@microsoft",
    about:
      "Nhân viên marketing: Nhân viên marketing là người chịu trách nhiệm xây dựng và triển khai các chiến lược marketing nhằm quảng bá sản phẩm hoặc dịch vụ của doanh nghiệp đến với khách hàng.",
    profileUrl: Instagram,
    jobPosts: ["1", "2"],
  },
  {
    _id: 8,
    name: "Youtube Corporation",
    location: "Việt Nam",
    email: "support@Speedjob.com",
    contact: "support@microsoft",
    about:
      "Nhân viên marketing: Nhân viên marketing là người chịu trách nhiệm xây dựng và triển khai các chiến lược marketing nhằm quảng bá sản phẩm hoặc dịch vụ của doanh nghiệp đến với khách hàng.",
    profileUrl: Youtube,
    jobPosts: ["1", "2"],
  },
  {
    _id: 9,
    name: "CodeWave Solutions",
    location: "Việt Nam",
    email: "support@Speedjob.com",
    contact: "support@microsoft",
    about:
      "Nhân viên marketing: Nhân viên marketing là người chịu trách nhiệm xây dựng và triển khai các chiến lược marketing nhằm quảng bá sản phẩm hoặc dịch vụ của doanh nghiệp đến với khách hàng.",
    profileUrl: CodeWave,
    jobPosts: ["1", "2"],
  },
];

export const users = [
  {
    name: "Google Corporation",
    location: "Việt Nam",
    email: "support@Speedjob.com",
    contact: "support@google",
    about:
      "Nhân viên marketing: Nhân viên marketing là người chịu trách nhiệm xây dựng và triển khai các chiến lược marketing nhằm quảng bá sản phẩm hoặc dịch vụ của doanh nghiệp đến với khách hàng.",
    profileUrl: Google,
    jobPosts: ["1", "2"],
    token: "gjhsdgsjgdjh",
  },
  {
    firstName: "CodeWaver",
    lastName: "Solutions",
    email: "support@code.com",
    contact: "support@google",
    about:
      "Nhân viên marketing: Nhân viên marketing là người chịu trách nhiệm xây dựng và triển khai các chiến lược marketing nhằm quảng bá sản phẩm hoặc dịch vụ của doanh nghiệp đến với khách hàng.",
    profileUrl: CodeWave,
    accountType: "seeker",
    cvUrl: "",
    token: "gjhsdgsjgdjh",
  },
];
