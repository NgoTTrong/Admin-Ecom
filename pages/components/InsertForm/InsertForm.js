import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useRouter } from 'next/router'

const InsertForm = ({setEnableForm}) => {
     const router = useRouter()
  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      thumbnailurl: "",
      baseprice: 0,
      discountprice: 0,
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Required")
        .min(4, "Must be 4 characters or more"),
      description: Yup.string(),
      thumbnailurl: Yup.string().required("Required"),
      baseprice: Yup.number().required("Required"),
      discountprice: Yup.mixed().test(
        "isSmaller",
        "Base price must be larger than discount price",
        (value, testContext) => {
          if (testContext.parent.baseprice < value) return false;
          return true;
        }
      ),
    }),
    onSubmit: async (values) => {
          try{
               await axios.post(process.env.NEXT_PUBLIC_HOST+"/product/insert",{productInfo: values})
               window.alert("Insert product successful");
               router.reload(window.location.pathname)
          } catch(e) {
               window.alert("Insert product fail");
          }

    },
  });
  return (
    <div className="form-container">
     <p className="close-form" onClick={(e)=>{
          e.preventDefault();
          setEnableForm(false);
     }}>X</p>
      <form className="insert-data-form" onSubmit={formik.handleSubmit}>
        <label> Product name </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          placeholder="Enter product name"
        />
        {formik.errors.name && (
          <p className="errorMsg"> {formik.errors.name} </p>
        )}
        <label> Description </label>
        <textarea 
        id="description"
         name="description" rows="4" 
         cols="50"
        value={formik.values.description}
          onChange={formik.handleChange}
          placeholder="Enter description"></textarea>
        
        {formik.errors.description && (
          <p className="errorMsg"> {formik.errors.description} </p>
        )}
        <label> Thumbnail url </label>
        <input
          type="text"
          id="thumbnailurl"
          name="thumbnailurl"
          value={formik.values.thumbnailurl}
          onChange={formik.handleChange}
          placeholder="Enter Thumbnail url"
        />
        {formik.errors.thumbnailurl && (
          <p className="errorMsg"> {formik.errors.thumbnailurl} </p>
        )}
        <label> Base price </label>
        <input
          type="text"
          id="baseprice"
          name="baseprice"
          value={formik.values.baseprice}
          onChange={formik.handleChange}
          placeholder="Enter base price"
        />
        {formik.errors.baseprice && (
          <p className="errorMsg"> {formik.errors.baseprice} </p>
        )}
        <label> Discount price </label>
        <input
          type="text"
          id="discountprice"
          name="discountprice"
          value={formik.values.discountprice}
          onChange={formik.handleChange}
          placeholder="Enter your phone numbers"
        />
        {formik.errors.discountprice && (
          <p className="errorMsg"> {formik.errors.discountprice} </p>
        )}
        <button type="submit"> Insert </button>
      </form>
    </div>
  );
};

export default InsertForm;
