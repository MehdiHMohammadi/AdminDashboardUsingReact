import { useLoaderData } from "react-router-dom";
import Course from "./course";

const CourseList = ({ courses }) => {
  const uld = useLoaderData();
  console.log(uld);
  return (
    <>
      {courses.length === 0 ? (
        <p className="p-4 ">دوره ای وجود ندارد</p>
      ) : (
        <div className="row">
          {courses.map((course) => (
            <div className="col-3" key={course.id}>
              <Course {...course} />
            </div>
          ))}
        </div>
      )}
    </>
  );
};
export default CourseList;
