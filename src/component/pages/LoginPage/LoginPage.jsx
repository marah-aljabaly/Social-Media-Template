import { useForm } from "react-hook-form";
import './loginPage.css'
export default function LoginPage() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm()
  const onSubmit = (data) => console.log(data)

  return (
    <>
      <div className="container-md">
        <h1 className="text-center" style={{marginTop: 6.5+'rem'}}>Rejestaration Form</h1>
        <div className="pt-4 pb-2 ps-3 pe-3 mt-3 rounded formContainer" style={{ backgroundColor: 'rgba(150, 156, 156, 0.6)', marginBottom: 6+'rem'}}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="firstName">First Name: </label>
            <input id="firstName" className="mt-1 mb-3" 
              {...register("firstName", 
              { required: true , pattern: /^[A-Za-z]+$/i, maxLength: 20 })} 
              aria-invalid={errors.firstName ? "true" : "false"}
            />
            {errors.firstName?.type === "required" && (<p role="alert" className="text-danger pt-0">First name is required</p>)}

            <label htmlFor="lastName">Last Name: </label>
            <input id="lastName" className="mt-1 mb-3"
              {...register("lastName",
              { required: true , pattern: /^[A-Za-z]+$/i })}
              aria-invalid={errors.lastName ? "true" : "false"}
            />
            {errors.lastName?.type === "required" && (<p role="alert" className="text-danger pt-0">Last name is required</p>)}

            <label htmlFor="age">Age: </label>
            <input id="age" className="mt-1 mb-3" {...register("age", { min: 18, max: 99 })} />

            <label htmlFor="email">Email: </label>
            <input id="email" type="email"
              className="mt-1 mb-3" 
              {...register("email" , { required: true})} 
              aria-invalid={errors.email ? "true" : "false"}
            />
            {errors.email?.type === "required" && (<p role="alert" className="text-danger pt-0">Email is required</p>)}

            <input type="submit" className="mt-3 mb-3" />
          </form>
        </div>
      </div>
    </>
  )

}
