import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createArticle } from "../../redux/actions/articleActions";

const CreatePost = () => {
  const dispatch = useDispatch();

  const category = useSelector((state) => state.category);
  const { categories } = category;

  const article = useSelector((state) => state.article);
  const { loading, success_create } = article;

  const [articleInfo, setArticleInfo] = useState({
    title: "",
    description: "",
    category_id: "",
  });
  const [mediaUrl, setMediaUrl] = useState("");

  const handleChange = (e) => {
    setArticleInfo({ ...articleInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (articleInfo.title !== "" || articleInfo.description !== "") {
      dispatch(
        createArticle({
          ...articleInfo,
          category_id: Number(articleInfo.category_id),
          user_id: 1,
          media_url: mediaUrl,
        })
      );
    }
  };

  useEffect(() => {
    if (success_create) {
      setArticleInfo({ title: "", description: "", category_id: "" });
    }
  }, [success_create]);

  console.log(articleInfo);
  return (
    <div className='bg-white p-4 card mx-2 mt-4'>
      <div className='flex items-center gap-3 mt-3'>
        <div className='w-4 h-4 rounded-full bg-red-900 flex justify-center items-center'></div>
        <h6 className='text-red-900 my-auto text-xl'>Post Content</h6>
      </div>
      {loading && <p>loading...</p>}
      <div className='grid grid-cols-1 md:grid-cols-5'>
        <div className='col-span-1 md:col-span-3'>
          <div className='mb-3'>
            <p className='text-gray-600 text-sm py-2'>Post Title below</p>
            <input
              type='text'
              className='w-full py-1 border focus:outline-none rounded-lg px-2 text-gray-600'
              name='title'
              value={articleInfo.title}
              onChange={handleChange}
            />
          </div>
          <div className='mb-3'>
            <p className='text-gray-600 text-sm py-2'>
              Choose story categories
            </p>
            <select
              type='text'
              className='w-full py-1 border focus:outline-none rounded-lg px-2 text-gray-600'
              name='category_id'
              value={articleInfo.category_id}
              onChange={handleChange}
            >
              {categories?.map((category) => {
                const { category_id, name } = category;
                return (
                  <option value={category_id} key={category_id}>
                    {name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className='mb-3'>
            <p className='text-gray-600 text-sm py-2'>
              Type the full article in the box below
            </p>
            <textarea
              type='text'
              rows={8}
              className='w-full py-1 border focus:outline-none rounded-lg px-2 text-gray-600'
              name='description'
              value={articleInfo.description}
              onChange={handleChange}
            ></textarea>
          </div>
        </div>
        <div className='col-span-1 md:col-span-2 mx-8'>
          <div className='mb-3 content-type'>
            <h6 className='text-default-gold py-2 text-md'>
              Select Content Type
            </h6>
            <div className='flex gap-2 items-center '>
              <input type='radio' name='content_type' />
              <p className='text-gray-600 text-md'>Article</p>
            </div>
            <div className='flex gap-2 items-center '>
              <input type='radio' name='content_type' />
              <p className='text-gray-600 text-md'>Audio</p>
            </div>
            <div className='flex gap-2 items-center '>
              <input type='radio' name='content_type' />
              <p className='text-gray-600 text-md'>Video</p>
            </div>
          </div>
          <div className='mb-3'>
            <h6 className='text-default-gold py-2 text-md'>
              Upload Features Image
            </h6>
            <input type='file' className='rounded py-1' />
          </div>
          <div className='mb-3'>
            <h6 className='text-default-gold py-2 text-md'>Enter Link URL:</h6>
            <input
              type='text'
              className='w-full py-1 border focus:outline-none rounded-lg px-2 text-gray-600'
              placeholder=' *For Audio and video files'
              value={mediaUrl}
              onChange={(e) => setMediaUrl(e.target.value)}
            />
          </div>
          <button
            className='mt-3 w-full bg-red-900 uppercase text-md text-white py-1 rounded mx-2'
            onClick={handleSubmit}
          >
            Publish Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
