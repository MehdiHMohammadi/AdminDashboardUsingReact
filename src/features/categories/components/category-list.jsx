import { useNavigation } from "react-router-dom";
import Pagination from "../../../components/pagination";
import Spinner from "../../../components/spinner";
import { useCategoryContext } from "../category-context";
import { TbEditCircle } from "react-icons/tb";
import { RiDeleteBin6Line } from "react-icons/ri";

const CategoryList = ({
  categories: { data, totalRecords },
  deleteCategory,
}) => {
  console.log(totalRecords);

  const navigation = useNavigation();
  const { setCategory } = useCategoryContext();
  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="card">
            {navigation.state !== "idle" && <Spinner />}
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>ردیف</th>
                  <th>نام</th>
                  <th>عملیات</th>
                </tr>
              </thead>
              <tbody>
                {data.map((category, index) => {
                  return (
                    <tr key={category.id}>
                      <td>{index + 1}</td>
                      <td>{category.name}</td>
                      <td className="table-action">
                        <a
                          style={{ color: "green", fontSize: "24px" }}
                          className="ms-3"
                          onClick={() => setCategory(category)}
                        >
                          <TbEditCircle />
                        </a>
                        <a
                          style={{ color: "red", fontSize: "24px" }}
                          onClick={() => deleteCategory(category.id)}
                        >
                          <RiDeleteBin6Line />
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className="card-footer">
              <Pagination totalRecords={totalRecords} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryList;
