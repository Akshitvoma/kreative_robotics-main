import {
  courses, projects, testimonials, inquiries,
  type Course, type InsertCourse,
  type Project, type InsertProject,
  type Testimonial, type InsertTestimonial,
  type Inquiry, type InsertInquiry
} from "@shared/schema";

export interface IStorage {
  getCourses(): Promise<Course[]>;
  getCourse(id: number): Promise<Course | undefined>;
  createCourse(course: InsertCourse): Promise<Course>;

  getProjects(): Promise<Project[]>;
  createProject(project: InsertProject): Promise<Project>;

  getTestimonials(): Promise<Testimonial[]>;
  createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial>;

  createInquiry(inquiry: InsertInquiry): Promise<Inquiry>;
}

export class InMemoryStorage implements IStorage {
  private courses: Course[] = [];
  private projects: Project[] = [];
  private testimonials: Testimonial[] = [];
  private inquiries: Inquiry[] = [];
  private nextId = 1;

  async getCourses(): Promise<Course[]> {
    return this.courses;
  }

  async getCourse(id: number): Promise<Course | undefined> {
    return this.courses.find(c => c.id === id);
  }

  async createCourse(insertCourse: InsertCourse): Promise<Course> {
    const course: Course = { ...insertCourse, id: this.nextId++ };
    this.courses.push(course);
    return course;
  }

  async getProjects(): Promise<Project[]> {
    return this.projects;
  }

  async createProject(insertProject: InsertProject): Promise<Project> {
    const project: Project = { ...insertProject, id: this.nextId++ };
    this.projects.push(project);
    return project;
  }

  async getTestimonials(): Promise<Testimonial[]> {
    return this.testimonials;
  }

  async createTestimonial(insertTestimonial: InsertTestimonial): Promise<Testimonial> {
    const testimonial: Testimonial = { ...insertTestimonial, id: this.nextId++ };
    this.testimonials.push(testimonial);
    return testimonial;
  }

  async createInquiry(insertInquiry: InsertInquiry): Promise<Inquiry> {
    const inquiry: Inquiry = { ...insertInquiry, id: this.nextId++ };
    this.inquiries.push(inquiry);
    return inquiry;
  }
}

export const storage = new InMemoryStorage();
