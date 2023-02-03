import "./ButtonDelete.css";
import axios from "axios";

const ButtonDelete = ({ id, setRefresh }) => {
  const handleDelete = async () => {
    try {
      // eslint-disable-next-line no-alert
      const result = window.confirm("Are you sure to delete him ?");
      if (result) {
        axios
          .delete(`${import.meta.env.VITE_BACKEND_URL}/api/bagpokemons/${id}`)
          .then(() => {
            setRefresh();
          });
      }
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <button type="button" onClick={handleDelete}>
      Delete
    </button>
  );
};

export default ButtonDelete;
