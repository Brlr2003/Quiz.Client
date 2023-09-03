// department.ts

import axios from "axios";
import { Department } from "../types/Navigation";

const API_BASE_URL = "http://192.168.1.44:5222/"; // Update with your API base URL

export async function createDepartment(name: string): Promise<void> {
  try {
    const response = await axios.post(`${API_BASE_URL}api/Departments`, {
      name: "Test",
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}
// Example API call
export async function getDepartments() {
  try {
    const response = await fetch("http://192.168.1.44:5222/api/Departments");
    if (!response.ok) {
      throw new Error("Network response was not sok");
    }
    const data = await response.json();
    return { data };
  } catch (error) {
    throw new Error("Error fetching departments: " + (error as Error).message);
  }
}
