// subject.ts

import axios from "axios";
import { Subject } from "../types/Navigation";

const API_BASE_URL = "http://192.168.1.44:5222"; // Update with your API base URL

export async function createSubject(
  name: string,
  departmentId: number
): Promise<void> {
  try {
    const response = await axios.post(`${API_BASE_URL}/api/Subjects`, {
      name: name,
      departmentId: departmentId,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getSubjects(): Promise<Subject[]> {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/Subjects`);
    return response.data;
  } catch (error) {
    throw error;
  }
}
