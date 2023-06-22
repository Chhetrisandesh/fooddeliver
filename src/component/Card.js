import React from 'react'

export default function Card() {
  return (
    <div>
        <div class="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQwVdJlw0cGMpABGhErcv8uq0jpOMaXXhp5aSjGu-b8g&s" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is text.</p>
            <div className='containar w-100'>
              <select className='m-w h-100  bg-success rounded'>
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}> {i + 1} </option>
                  )
                })}
              </select>

              <select className='m-2 h-100  bg-success rounded' >
                <option value="Half">Half</option>
                <option value="Full">Full</option>
              </select>
              <div className='d-inline h-100 fs-5'>
                Total Prize
              </div>
            </div>

          </div>
        </div>
      </div>
  )
}
