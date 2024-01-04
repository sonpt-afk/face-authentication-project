import {useState} from "react";
import {useForm} from "react-hook-form";
import {CustomButton, JobCard, JobTypes, TextInput} from "../components";
import {jobs} from "../utils/data";

const UploadJob = () => {
  const {
    register,
    handleSubmit,
    getValues,
    watch,
    formState: {errors},
  } = useForm({
    mode: "onChange",
    defaultValues: {},
  });

  const [errMsg, setErrMsg] = useState("");
  const [jobTitle, setJobTitle] = useState("Full-Time");

  const onSubmit = async (data) => {};

  return (
    <div className="container mx-auto flex flex-col md:flex-row gap-8 2xl:gap-14 bg-[#f7fdfd] px-5">
      <div className="w-full h-fit md:w-2/3 2xl:2/4 bg-white px-5 py-10 md:px-10 shadow-md">
        <div>
          <p className="text-gray-500 font-semibold text-2xl">Tin tuyển dụng</p>

          <form
            className="w-full mt-2 flex flex-col gap-8"
            onSubmit={handleSubmit(onSubmit)}
          >
            <TextInput
              name="jobTitle"
              label="Tên công việc"
              placeholder="VD: Software Engineer"
              type="text"
              required={true}
              register={register("jobTitle", {
                required: "Thông tin tên công việc là bắt buộc",
              })}
              error={errors.jobTitle ? errors.jobTitle?.message : ""}
            />

            <div className="w-full flex gap-4">
              <div className={`w-1/2 mt-2`}>
                <label className="text-gray-600 text-sm mb-1">
                  Loại công việc
                </label>
                <JobTypes jobTitle={jobTitle} setJobTitle={setJobTitle} />
              </div>

              <div className="w-1/2">
                <TextInput
                  name="salary"
                  label="Lương (VND)"
                  placeholder="VD: 10000000"
                  type="number"
                  register={register("salary", {
                    required: "Thông tin lương là bắt buộc",
                  })}
                  error={errors.salary ? errors.salary?.message : ""}
                />
              </div>
            </div>

            <div className="w-full flex gap-4">
              <div className="w-1/2">
                <TextInput
                  name="vacancies"
                  label="Số lượng"
                  placeholder="1"
                  type="number"
                  register={register("vacancies", {
                    required: "Thông tin số lượng là bắt buộc",
                  })}
                  error={errors.vacancies ? errors.vacancies?.message : ""}
                />
              </div>

              <div className="w-1/2">
                <TextInput
                  name="experience"
                  label="Số năm kinh nghiệm"
                  placeholder="2"
                  type="number"
                  register={register("experience", {
                    required: "Thông tin về kinh nghiệm là bắt buộc",
                  })}
                  error={errors.experience ? errors.experience?.message : ""}
                />
              </div>
            </div>

            <TextInput
              name="location"
              label="Địa điểm"
              placeholder="VD: Hà Nội"
              type="text"
              register={register("location", {
                required: "Thông tin về địa điểm là bắt buộc",
              })}
              error={errors.location ? errors.location?.message : ""}
            />
            <div className="flex flex-col">
              <label className="text-gray-600 text-sm mb-1">
                Mô tả công việc
              </label>
              <textarea
                className="rounded border border-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-base px-4 py-2 resize-none"
                rows={4}
                cols={6}
                {...register("desc", {
                  required: "Thông tin mô tả về công việc là ",
                })}
                aria-invalid={errors.desc ? "true" : "false"}
              ></textarea>
              {errors.desc && (
                <span role="alert" className="text-xs text-red-500 mt-0.5">
                  {errors.desc?.message}
                </span>
              )}
            </div>

            <div className="flex flex-col">
              <label className="text-gray-600 text-sm mb-1">
                Yêu cầu về công việc
              </label>
              <textarea
                className="rounded border border-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-base px-4 py-2 resize-none"
                rows={4}
                cols={6}
                {...register("resposibilities")}
              ></textarea>
            </div>

            {errMsg && (
              <span role="alert" className="text-sm text-red-500 mt-0.5">
                {errMsg}
              </span>
            )}
            <div className="mt-2">
              <CustomButton
                type="submit"
                containerStyles="inline-flex justify-center rounded-md border border-transparent bg-blue-600 px-8 py-2 text-sm font-medium text-white hover:bg-[#1d4fd846] hover:text-[#1d4fd8] focus:outline-none "
                title="Đăng"
              />
            </div>
          </form>
        </div>
      </div>
      <div className="w-full md:w-1/3 2xl:2/4 p-5 mt-20 md:mt-0">
        <p className="text-gray-500 font-semibold">Tin tuyển dụng gần đây</p>

        <div className="w-full flex flex-wrap gap-6">
          {jobs.slice(0, 4).map((job, index) => {
            return <JobCard job={job} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default UploadJob;
