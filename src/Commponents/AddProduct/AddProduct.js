import React, { useState } from "react";
import { multipleFilesUpload } from './data/api';
import Select from "react-select";
import data from "./select.json"
import "./AddProduct.css";
import { useTranslation } from "react-i18next";

function AddProduct(props) {

  const [multipleFiles, setMultipleFiles] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [title, setTitle] = useState('');
  const [mark, setMark] = useState(false);
  const [count, setCount] = useState(1);
  const [multipleProgress, setMultipleProgress] = useState(0);
  const [select1, setSelect1] = useState('');
  const [select2, setSelect2] = useState('');
  const [select3, setSelect3] = useState('');
  const [select2List, setSelect2List] = useState([]);
  const [select3List, setSelect3List] = useState([]);

  // handle change event of the select1 dropdown
  const handleSelect1Change = (a) => {
    setSelect1(a);
    setSelect2List(a.select2);
    setSelect2('');
  };
  // handle change event of the select2 dropdown
  const handleSelect2Change = (a) => {
    setSelect2(a);
    setSelect3List(a.select3);
    setSelect3('');
  };
  const MultipleFileChange = (e) => {
    setMultipleFiles(e.target.files);
    setMultipleProgress(0);
  }
  const UploadMultipleFiles = async () => {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('price', price);
    formData.append('category', select1.name);
    formData.append('type', select2.name);
    formData.append('title', title);
    formData.append('mark', mark);
    formData.append('count', 1);
    for (let i = 0; i < multipleFiles.length; i++) {
      formData.append('files', multipleFiles[i]);
    }
    console.log(formData);
    await multipleFilesUpload(formData);
    // props.getMultiple();
    window.location.reload(false);

  };
  const { t } = useTranslation();
  const language = [
    {
      code: "uz",
      name: "Uzbek",
      country_code: "uz",
    },
    {
      code: "en",
      name: "English",
      country_code: "gb",
    },
    {
      code: "pу",
      name: "Pусский",
      country_code: "py",
    },
  ];

  return (
    <>
      <div className="container contacol my-5 p-5">
        <div className="inputsAddGr">
          <h3 className="text-center nameTitleAdd">{t("adP")}</h3>
          <form className="form  formEction">
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              className="form-control my-4 inputsadd"
            />
            <input
              type="text"
              onChange={(e) => setPrice(e.target.value)}
              placeholder="price"
              className="form-control my-4 inputsadd"
            />
            <Select
              className="form-control my-4 inputsadd"
              name="category"
              placeholder="...tanlang..."
              value={select1}
              options={data}
              onChange={handleSelect1Change}
              getOptionLabel={x => x.name}
              getOptionValue={x => x.code}
            />
            <Select
              name="type"
              className="form-control my-4 inputsadd"
              placeholder="...tanlang..."
              value={select2}
              options={select2List}
              onChange={handleSelect2Change}
              getOptionLabel={x => x.name}
              getOptionValue={x => x.code}
            />
            <textarea type="text" 
            onChange={(e) => setTitle(e.target.value)}
             placeholder="title"
              className="textareaAdd" required="required"></textarea>
            <input type="file" onChange={(e) => MultipleFileChange(e)} className="form-control my-4" multiple />
            <button
             type="button"
             onClick={() => UploadMultipleFiles()} 
             className="btn btnAddAdd"
             >Qoshish</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddProduct;
