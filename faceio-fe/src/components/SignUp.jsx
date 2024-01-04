import React, {Fragment, useState} from "react";
import {Dialog, Transition} from "@headlessui/react";
import {useForm} from "react-hook-form";
import {useLocation} from "react-router-dom";
import {useDispatch} from "react-redux";
import TextInput from "./TextInput";
import CustomButton from "./CustomButton";
import {useNavigate} from "react-router-dom";

const SignUp = ({open, setOpen}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isRegister, setIsRegister] = useState(true);
  const [accountType, setAccountType] = useState("seeker");

  const [errMsg, setErrMsg] = useState("");
  const {
    register,
    handleSubmit,
    getValues,
    watch,
    formState: {errors},
  } = useForm({
    mode: "onChange",
  });
  let from = location.state?.from?.pathname || "/";

  const closeModal = () => setOpen(false);
  const onSubmit = async () => {
    const formDataRegister = {
      email: getValues("email"),
      name: getValues("name"),
      password: getValues("password"),
    };

    const {name, ...formDataLogin} = formDataRegister;
    const closeModal = () => setOpen(false);

    try {
      let response;
      if (isRegister) {
        response = await fetch("http://localhost:3000/api/auth/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formDataRegister),
        });
      } else {
        // Call your login API here
        response = await fetch("http://localhost:3000/api/auth/signin", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formDataLogin),
        });
      }

      const data = await response.json();
      console.log(1111, data)

      if (!response.ok) {
        setErrMsg(data.message || "Something went wrong");
      } else {
        // Handle successful response, e.g., dispatch user info to Redux store
        const user = data?.result;
        navigate("/find-jobs", {state: user});
        closeModal();
      }
    } catch (error) {
      console.error("Error:", error);
      setErrMsg("Something went wrong");
    }
  };
  return (
    <>
      <Transition appear show={open || false}>
        <Dialog as="div" className="relative z-10 " onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto ">
            <div className="flex min-h-full items-center justify-center p-4 text-center ">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all ">
                  <Dialog.Title
                    as="h3"
                    className="text-xl font-semibold lwading-6 text-gray-900"
                  >
                    {isRegister ? "Tạo tài khoản" : "Đăng nhập với tài khoản"}
                  </Dialog.Title>

                  <div className="w-full flex items-center justify-center py-4 ">
                    <button
                      className={`flex-1 px-4 py-2 rounded text-sm outline-none bg-[#1d4fd862] text-blue-900 font-semibold`}
                      onClick={() => setAccountType("company")}
                    >
                      Tài khoản cá nhân
                    </button>
                  </div>

                  <form
                    className="w-full flex flex-col gap-5"
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <TextInput
                      name="email"
                      label="Email"
                      placeholder="email@example.com"
                      type="email"
                      register={register("email", {
                        required: "Thông tin Email là bắt buộc",
                      })}
                      error={errors.email ? errors.email.message : ""}
                    />

                    {isRegister && (
                      <div className="w-full flex gap-1 md:gap-2">
                        <div className={`w-full`}>
                          <TextInput
                            name={"name"}
                            label={"Họ tên"}
                            placeholder={"Dream Job"}
                            type="text"
                            register={register("name", {
                              required: "tên là bắt buộc",
                            })}
                          />
                        </div>
                      </div>
                    )}

                    <div className="w-full flex gap-1 md:gap-2">
                      <div className={`${isRegister ? "w-1/2" : "w-full"}`}>
                        <TextInput
                          name="password"
                          label="Mật khẩu"
                          placeholder="VD: @secret1234"
                          type="password"
                          register={register("password", {
                            required: "Mật khẩu là bắt buộc",
                          })}
                          error={
                            errors.password ? errors.password?.message : ""
                          }
                        />
                      </div>

                      {isRegister && (
                        <div className="w-1/2">
                          <TextInput
                            label="Xác nhận mật khẩu"
                            placeholder="VD: @secret1234"
                            type="password"
                            register={register("cPassword", {
                              validate: (value) => {
                                const {password} = getValues();

                                if (password != value) {
                                  return "Mật khẩu không khớp";
                                }
                              },
                            })}
                            error={
                              errors.cPassword &&
                              errors.cPassword.type === "validate"
                                ? errors.cPassword?.message
                                : ""
                            }
                          />
                        </div>
                      )}
                    </div>

                    {errMsg && (
                      <span
                        role="alert"
                        className="text-sm text-red-500 mt-0.5"
                      >
                        {errMsg}
                      </span>
                    )}

                    <div className="mt-2">
                      <CustomButton
                        type="submit"
                        containerStyles={`inline-flex justify-center rounded-md bg-blue-600 px-8 py-2 text-sm font-medium text-white outline-none hover:bg-blue-800`}
                        title={
                          isRegister
                            ? "Tạo tài khoản"
                            : "Đăng nhập với tài khoản"
                        }
                      />
                    </div>
                  </form>

                  <div className="mt-4">
                    <p className="text-sm text-gray-700">
                      {isRegister ? "Đã có tài khoản" : "Không có tài khoản"}

                      <span
                        className="text-sm text-blue-600 ml-2 hover:text-blue-700 hover:font-semibold cursor-pointer"
                        onClick={() => setIsRegister((prev) => !prev)}
                      >
                        {isRegister ? "Đăng nhập" : "Tạo tài khoản"}
                      </span>
                    </p>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default SignUp;
