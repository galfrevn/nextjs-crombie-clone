import Head from "next/head";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import StepsRow from "../../components/StepsRow";
import BlackButton from "../../components/ui/BlackButton";
import { ChevronLeftIcon } from "@heroicons/react/outline";
import Link from "next/link";

export default function Contact() {
  const router = useRouter();

  const {
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    console.log(errors);
    if (!errors.length) {
      router.push("/");
    }
  };

  return (
    <div className="bg-black h-screen">
      <Head>
        <title>Contact | Crombie</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.ico" />
        <meta name="theme-color" content="#000000" />
      </Head>

      <div className="px-8 pt-20">
        <p className="text-[11px] text-[#777] pb-5">Last one, we promise</p>

        <form
          action=""
          className="text-[11px]"
          autoComplete="off"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mb-6 ">
            <p className=" text-white text-xl font-bold mb-2">
              How did you find us?
            </p>

            <label className="text-white text-[9px] flex items-center mb-2">
              <input
                className="form-check-input appearance-none transition-all h-3 w-3 border border-[#777] rounded-sm bg-black checked:bg-white checked:border-white focus:outline-none duration-200 bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              I saw a Google Ad
            </label>
            <label className="text-white text-[9px] flex items-center mb-2">
              <input
                className="form-check-input appearance-none transition-all h-3 w-3 border border-[#777] rounded-sm bg-black checked:bg-white checked:border-white focus:outline-none duration-200 bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              I googled and it came up
            </label>
            <label className="text-white text-[9px] flex items-center mb-2">
              <input
                className="form-check-input appearance-none transition-all h-3 w-3 border border-[#777] rounded-sm bg-black checked:bg-white checked:border-white focus:outline-none duration-200 bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              Through a client of yours
            </label>
            <label className="text-white text-[9px] flex items-center mb-2">
              <input
                className="form-check-input appearance-none transition-all h-3 w-3 border border-[#777] rounded-sm bg-black checked:bg-white checked:border-white focus:outline-none duration-200 bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              I saw a project you did
            </label>
            <label className="text-white text-[9px] flex items-center mb-2">
              <input
                className="form-check-input appearance-none transition-all h-3 w-3 border border-[#777] rounded-sm bg-black checked:bg-white checked:border-white focus:outline-none duration-200 bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              On Clutch
            </label>
            <label className="text-white text-[9px] flex items-center mb-2">
              <input
                className="form-check-input appearance-none transition-all h-3 w-3 border border-[#777] rounded-sm bg-black checked:bg-white checked:border-white focus:outline-none duration-200 bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              On LinkedIn
            </label>
            <label className="text-white text-[9px] flex items-center mb-2">
              <input
                className="form-check-input appearance-none transition-all h-3 w-3 border border-[#777] rounded-sm bg-black checked:bg-white checked:border-white focus:outline-none duration-200 bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              On Instagram / Facebook
            </label>
            <label className="text-white text-[9px] flex items-center mb-2">
              <input
                className="form-check-input appearance-none transition-all h-3 w-3 border border-[#777] rounded-sm bg-black checked:bg-white checked:border-white focus:outline-none duration-200 bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              On UpWork
            </label>
          </div>


          <div className="flex items-center justify-between">
            <StepsRow step={5} />
            <div className="flex items-center">
              <Link href={"/contact/step-four"} passHref>
                <ChevronLeftIcon className="w-4 h-4 mr-2 p-[1px] rounded-full border-[#777] border-[1px] text-[#777] " />
              </Link>
              <BlackButton text="Next" type="white" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
