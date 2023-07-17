import React from 'react'

function PostCardSkeleton() {
    return (

        <div className='row bg-light post-card my-4 p-0 py-2  m-0'>
            <div className="col-sm-4 col-5">
                <p className="placeholder-glow w-100 " style={{ height: "100px" }} >
                    <span className="placeholder col-12" style={{ height: "100%" }}></span>
                </p>
            </div>
            <div className="col-sm-8 col-7 ">
                <p className="placeholder-glow  w-100"  >
                    <span className="placeholder col-12" style={{ height: "100%" }}></span>
                </p>
                <p className="placeholder-glow  w-100"  >
                    <span className="placeholder col-12" style={{ height: "100%" }}></span>
                </p>
                <div className="col-12 d-flex justify-content-around">
                    <p className="placeholder-glow  " style={{ height: "30px", width: "40px" }} >
                        <span className="placeholder col-12" style={{ height: "100%" }}></span>
                    </p>
                    <p className="placeholder-glow ms-4 " style={{ height: "30px", width: "40px" }} >
                        <span className="placeholder col-12" style={{ height: "100%" }}></span>
                    </p>
                </div>
            </div>


        </div>

    )
}

export default PostCardSkeleton