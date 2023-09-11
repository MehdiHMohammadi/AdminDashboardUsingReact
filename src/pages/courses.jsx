import { httpInterceptedService } from "@core/http-service";
import CourseList from "../features/courses/components/course-list";
import { Await, defer, useLoaderData } from "react-router-dom";
import { Suspense } from "react";
import Loading from "@core/loading";

const Courses = () => {
  const data = useLoaderData();
  return (
    <div className="row">
      <div className="col-12">
        <div className="d-flex align-items-center justify-content-between mb-5">
          <a className="btn btn-primary fw-bolder mt-n1">افزون دوره جدید</a>
        </div>
        <Suspense fallback={<Loading height={400} width={400} />}>
          <Await resolve={data.courses}>
            {(loadedCourses) => <CourseList courses={loadedCourses} />}
          </Await>
        </Suspense>
      </div>
    </div>
  );
};

export async function coursesLoader() {
  return defer({
    courses: loadCourses(),
  });
}

const loadCourses = async () => {
  const response = await httpInterceptedService.get("/Course/list");
  return response.data;
};

export default Courses;
