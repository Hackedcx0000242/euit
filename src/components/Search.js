import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';

const Search = () =>{
  let {name}=useParams();
  let [newUser,setUser]=useState({
    name: "",
    mobile:"",
    email: "",
    address: "",
    password: "",
   })
   let saveNewUser=async ()=>{
    let url= `http://localhost:3089/api/create-user-account`;
    let {data} = await axios.post(url,{...newUser})
    if(data)
    {
      alert("Your Accounr Is Created NoW");
      // window.location.assign("/restro/:id")
    }
    else{
      alert("Sry !")
    }
   }
  // console.log(p)
    return <>
    <div className="modal fade" id="Createaccount" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">Create An Account</h1>

              <button type="button" className="btn-close " data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <section className="p-2">
              <div className="form-floating mb-2">
              <input type="text" className="form-control" value={newUser.name}  onChange={(event)=>{setUser({...newUser,name:event.target.value})}}/>
                <label htmlFor="form-label">Name</label>
              </div>
              <div className="form-floating mb-2">
              <input type="email" className="form-control" value={newUser.email} onChange={(event)=>{setUser({...newUser,email:event.target.value})}}/>
                <label htmlFor="form-label">Email</label>
              </div>
              <div className="form-floating mb-2">
              <input type="number" className="form-control" value={newUser.mobile} onChange={(event)=>{setUser({...newUser,mobile:event.target.value})}}/>
                <label htmlFor="form-label">Mobile NO</label>
              </div>
              <div className="form-floating mb-2">
              <input type="password" className="form-control" value={newUser.password} onChange={(event)=>{setUser({...newUser,password:event.target.value})}}/>
                <label htmlFor="form-label">Password</label>
              </div>
              <div className="form-floating mb-2">
              <textarea class="form-control"  rows="3" value={newUser.address} onChange={(event)=>{setUser({...newUser,address:event.target.value})}}></textarea>
                <label htmlFor="form-label">Address</label>
              </div>

               
              </section>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-success" onClick={saveNewUser}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    
      <div className="modal fade" id="login" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content ">
            <div className="modal-header ">
              <h1 className="modal-title " id="login">Login</h1>

              <button type="button" className="btn-close " data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <section className="p-2">
              <div className="form-floating mb-2">
                <input type="email" className="form-control"/>
                <label htmlFor="form-label">Email</label>
              </div>

              <div className="form-floating mb-2">
                <input type="password" className="form-control"/>
                <label htmlFor="form-label">Password</label>
              </div>
            
               
              </section>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-success">Sign In</button>
            </div>
          </div>
        </div>
      </div>
    <main className="container-fluid">
        <section className="row bg-danger ">
            <header className="col-11 m-auto d-md-flex d-lg-flex justify-content-between bg-danger py-2 d-none ">
                <p className="mb-0 fs-5 fw-bold logo text-danger ">e!</p>
                <section>
                    <button className="btn text-white" data-bs-toggle="modal" data-bs-target="#login">Login</button>
                    <button className="btn btn-outline-light " data-bs-toggle="modal" data-bs-target="#Createaccount">Create An Account</button>
                </section>
            </header>
        </section>
        <section className="row">
            <section className="col-11 m-auto col-lg-10 col-md-11  ">
                <p className="my-3 name-filter ani  fs-2">{name} Near By </p>
                <section className="row gap-5">
                    <section className="col-lg-3 col-md-4 col-12 filter-type bg-white    p-2 px-3">
                        <p className="fw-bold mb-2 d-lg-flex d-md-flex d-none" >Filters</p>
                        <p className="fw-bold mb-2 d-flex justify-content-between d-lg-none d-md-none
                        " data-bs-toggle="collapse" data-bs-target="#search" >
                            <span>Filter/Sort</span>
                            <span className="fa fa-eye "></span>
                        </p>
                    <aside id="search" className="collapse d-lg-block d-md-block">
                        <div>
                            <label htmlFor="" className="form-label">Select Location</label>
                            <select name="" id="" className="form-select rounded-0">
                              <option value="">Select Location</option>
                              <option value="">Select Location</option>
                              <option value="">Select Location</option>
                              <option value="">Select Location</option>
                              <option value="">Select Location</option>
                            </select>
                        </div>
            
                        <div className="my-2">
                            <label className="form-label fw-bold text-primary">Cuisine</label>
                            <div className="form-check ms-2">
                              <input type="checkbox" className="form-check-input" />
                              <label htmlFor="" className="form-check-label">North Indian</label>
                            </div>
                            <div className="form-check ms-2">
                              <input type="checkbox" className="form-check-input" />
                              <label htmlFor="" className="form-check-label">North Indian</label>
                            </div>
                            <div className="form-check ms-2">
                              <input type="checkbox" className="form-check-input" />
                              <label htmlFor="" className="form-check-label">North Indian</label>
                            </div>
                            <div className="form-check ms-2">
                              <input type="checkbox" className="form-check-input" />
                              <label htmlFor="" className="form-check-label">North Indian</label>
                            </div>
                            <div className="form-check ms-2">
                              <input type="checkbox" className="form-check-input" />
                              <label htmlFor="" className="form-check-label">North Indian</label>
                            </div>
                        </div>
            
                        <div className="my-2">
                            <label className="form-label fw-bold text-primary">Cost For Two</label>
                            <div className="form-check ms-2">
                              <input type="radio" className="form-check-input" name="radio" id="rd-1" />
                              <label htmlFor="" className="form-check-label">Less than ` 500</label>
                            </div>
                            <div className="form-check ms-2">
                              <input type="radio" className="form-check-input"name="radio" id="rd-2" />
                              <label htmlFor="" className="form-check-label">` 500 to ` 1000</label>
                            </div>
                            <div className="form-check ms-2">
                              <input type="radio" className="form-check-input "name="radio" id="rd-3" />
                              <label htmlFor="" className="form-check-label" >` 1000 to ` 1500</label>
                            </div>
                            <div className="form-check ms-2">
                              <input type="radio" className="form-check-input"name="radio" id="rd-4" />
                              <label htmlFor="" className="form-check-label">` 1500 to ` 2000</label>
                            </div>
                            <div className="form-check ms-2">
                              <input type="radio" className="form-check-input" name="radio" id="rd-5"/>
                              <label htmlFor="" className="form-check-label">` 2000+</label>
                            </div>
                        </div>
            
                        <div className="my-2">
                            <label className="form-label fw-bold text-primary">Sort</label>
                            <div className="form-check ms-2">
                              <input type="radio" className="form-check-input" name="radio" id="radio-1"/>
                              <label htmlFor="radio-1" className="form-check-label" >Price low to high</label>
                            </div>
                            <div className="form-check ms-2">
                              <input type="radio" className="form-check-input" name="radio" id="radio-2" />
                              <label htmlFor="radio-2" className="form-check-label">Price high to low</label>
                            </div>
                        </div>              
                    </aside>
                    </section>
                    <section className="col-lg-8 col-md-7 col-12 px-0 px-lg-2 px-md-2 ">
                        <section className="cart-1 bg-white p-3 px-4 mb-3">
                            <section className="d-flex align-items-center gap-3">
                                <img src="./image/assets/breakfast.png" alt="" className="res-img"/>
                                <section>
                                    <p className="m-0 fw-bold fs-3 text-dark">The Big Chill Cakery</p>
                                    <p className="m-0 fw-bold  text-dark">FORT</p>
                                    <p className="m-0 text-muted ">Shop 1, Plot D, Samruddhi Complex, Chincholi …</p>
                                </section>
                            </section>
                            <hr/>
                            <section className="d-flex gap-5">
                                <section className="text-muted" >
                                    <p>CUISINES:</p>
                                    <p>COST FOR TWO:</p>
                                </section>
                                <section className="fw-bold text-dark">
                                    <p>Bakery</p>
                                    <p>₹700</p>
                                </section>
                            </section>
                        </section>
                        <section className="cart-1 bg-white p-3 px-4 mb-4">
                            <section className="d-flex align-items-center gap-3 ">
                                <img src="./image/assets/dinner.png" alt="" className="res-img"/>
                                <section>
                                    <p className="m-0 fw-bold fs-3 text-dark">The Big Chill Cakery</p>
                                    <p className="m-0 fw-bold  text-dark">FORT</p>
                                    <p className="m-0 text-muted ">Shop 1, Plot D, Samruddhi Complex, Chincholi …</p>
                                </section>
                            </section>
                            <hr/>
                            <section className="d-flex gap-5">
                                <section className="text-muted" >
                                    <p>CUISINES:</p>
                                    <p>COST FOR TWO:</p>
                                </section>
                                <section className="fw-bold text-dark">
                                    <p>Bakery</p>
                                    <p>₹700</p>
                                </section>
                            </section>
                        </section>
                        <section>
                            <ul className="list-unstyled d-flex gap-4 justify-content-center zamto">
                                <li><span className="fa fa-angle-left"></span></li>
                                <li className="active">1</li>
                                <li>2</li>
                                <li>3</li>
                                <li>4</li>
                                <li>5</li>
                                <li><span className="fa fa-angle-right"></span></li>
                            </ul>
                        </section>
                    </section>
                </section>
            </section>

        </section>
    </main>
    </>
}
export default Search;