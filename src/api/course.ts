import axiosClient from 'api/axios';

interface CourseUserPayload {
  name: string;
  email: string;
  receiveUpdates: boolean;
  courseId: number;
}

export function startCourse(user: CourseUserPayload) {
  return axiosClient.post(`/course-users`, user).then(response => response);
}
