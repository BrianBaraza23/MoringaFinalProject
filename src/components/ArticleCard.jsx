import React from "react";
import StarIcon from "@mui/icons-material/Star";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";

const ArticleCard = ({ is_new_article, is_wishlist }) => {
  return (
    <div className='card  border'>
      <img
        src='/assets/images/image-2.jpeg'
        className='card-img-top'
        alt='...'
      />
      <div className='card-body'>
        <div className='flex justify-between text-slate-300 text-md'>
          <div className='flex gap-1 items-center'>
            <AccountCircleOutlinedIcon style={{ fontSize: "18px" }} />
            <h6 className='my-auto text-sm'>John Doe</h6>
          </div>
          <div className='flex gap-1 items-center'>
            <i
              className='fa fa-clock-o'
              aria-hidden='true'
              style={{ fontSize: "14px" }}
            ></i>
            <h6 className='my-auto text-sm'>1st Nov 2023</h6>
          </div>
        </div>
        <h5 className='text-default-green font-semibold py-2'>
          How is AI changing the modern office?
        </h5>
        <p className='text-gray-600 text-sm'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
          reprehenderit placeat quo quasi eaque saepe! Dolorum, harum voluptate
          quisquam nostrum repellendus magnam alias sunt illum possimus corrupti
          laudantium dolore officia.
        </p>
        <Link to='/articles/1' className='py-3 text-default-gold'>
          <h6 className='text-lg'>Read More</h6>
        </Link>
        {!is_wishlist && is_new_article ? (
          <div className='flex gap-4 justify-end'>
            <div className='flex gap-1 items-center text-default-green'>
              <i className='fa fa-check-circle-o' aria-hidden='true'></i>
              <h6 className='my-auto'>Approve</h6>
            </div>
            <div className='flex gap-2 items-center text-red-500 cursor-pointer'>
              <i class='fa fa-trash-o' aria-hidden='true'></i>
              <h6 className='my-auto'>Delete</h6>
            </div>
          </div>
        ) : (
          !is_wishlist && (
            <div className='flex text-default-gold justify-end'>
              <StarIcon style={{ fontSize: "20px" }} />
              <StarIcon style={{ fontSize: "20px" }} />
              <StarIcon style={{ fontSize: "20px" }} />
              <StarIcon
                style={{ fontSize: "20px" }}
                className='text-slate-200'
              />
              <StarIcon
                style={{ fontSize: "20px" }}
                className='text-slate-200'
              />
            </div>
          )
        )}
        {is_wishlist && (
          <div className='flex justify-between'>
            <h6 className='text-red-400 uppercase my-auto text-sm cursor-pointer'>
              Remove from list
            </h6>
            <div className='flex text-default-gold justify-end'>
              <StarIcon style={{ fontSize: "20px" }} />
              <StarIcon style={{ fontSize: "20px" }} />
              <StarIcon style={{ fontSize: "20px" }} />
              <StarIcon
                style={{ fontSize: "20px" }}
                className='text-slate-200'
              />
              <StarIcon
                style={{ fontSize: "20px" }}
                className='text-slate-200'
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ArticleCard;
