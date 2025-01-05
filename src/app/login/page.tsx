import Image from "next/image";
import FormLogin from "../component/organism/FormLogin";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center border-2 border-blue-900">
      <div className="w-[20rem] md:w-full h-[35rem] flex border-2 border-red-700 flex-col md:flex-row">
        <div className="w-1/2 h-[500px] hidden md:flex justify-center items-center">
          <Image
            src={
              "https://img.freepik.com/premium-photo/young-man-girl-sitting-floor-working-laptop-computer_187882-1811.jpg?ga=GA1.1.1069127498.1732985300&semt=ais_hybrid"
            }
            alt=""
            width={600}
            height={600}
            className="rounded-xl"
          />
        </div>

        <div className="w-1/2 h-[500px]">
          <FormLogin />
        </div>
      </div>
    </div>
  );
}
