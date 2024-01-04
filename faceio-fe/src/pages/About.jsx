import React from "react";
import {JobImg} from "../assets";
import "../css/Navbar.css";

const About = () => {
  return (
    <div className="container mx-auto flex flex-col gap-8 2xl:gap-14 py-6 ">
      <div className="w-full flex flex-col-reverse md:flex-row gap-10 items-center p-5">
        <div className="w-full md:2/3 2xl:w-2/4">
          <h1 className="text-3xl text-navbar font-bold mb-5">Về chúng tôi</h1>
          <p className="text-justify leading-7">
            Chào mừng bạn đến với{" "}
            <a href="/" className="text-navbar font-bold text-xl">
              Speed<span className="text-[#8d3b94]">JOB</span>
            </a>
            . Chúng tôi là một nền tảng kết nối người tìm việc với nhà tuyển
            dụng. Chúng tôi tin rằng mọi người đều có thể tìm được công việc phù
            hợp với khả năng và sở thích của mình. Chúng tôi bắt đầu hoạt động
            vào năm 2023. Từ đó đến nay, chúng tôi đã giúp hàng nghìn người tìm
            được công việc mơ ước của mình. Chúng tôi luôn nỗ lực để mang đến
            cho người tìm việc những cơ hội việc làm tốt nhất, và cho nhà tuyển
            dụng những ứng viên phù hợp nhất. Chúng tôi tin rằng{" "}
            <a href="/" className="text-navbar font-bold text-xl">
              Speed<span className="text-[#8d3b94]">JOB</span>
            </a>
            là một nền tảng hiệu quả để kết nối người tìm việc với nhà tuyển
            dụng. Chúng tôi cam kết mang đến cho cả hai bên những trải nghiệm
            tốt nhất.
          </p>
        </div>
        <img src={JobImg} alt="About" className="w-auto h-[300px]" />
      </div>

      <div className="leading-8 px-5 text-justify">
        <h1 className="text-3xl text-navbar font-bold mb-5">
          Giá trị của chúng tôi
        </h1>
        <ul>
          Chúng tôi luôn đề cao các giá trị sau:
          <li>
            + Công bằng: Chúng tôi tin rằng mọi người đều có cơ hội như nhau để
            tìm được công việc phù hợp.
          </li>
          <li>
            + Tính toàn diện: Chúng tôi chào đón tất cả mọi người, bất kể giới
            tính, tuổi tác, tôn giáo, sắc tộc hay bất kỳ yếu tố nào khác.
          </li>
          <li>
            + Sáng tạo: Chúng tôi luôn tìm kiếm những cách thức mới để cải thiện
            trải nghiệm của người tìm việc và nhà tuyển dụng.
          </li>
          <li>
            + Chất lượng: Chúng tôi cam kết cung cấp cho người tìm việc và nhà
            tuyển dụng những dịch vụ chất lượng cao.
          </li>
        </ul>
        <br />
        <h1 className="text-3xl text-navbar font-bold mb-5">
          Các dịch vụ mà chúng tôi cung cấp
        </h1>
        <ul>
          <li>
            1. Tìm kiếm công việc: Người tìm việc có thể tìm kiếm công việc theo
            vị trí, ngành nghề, kinh nghiệm, địa điểm,...
          </li>
          <li>
            2. Đăng tin tuyển dụng: Nhà tuyển dụng có thể đăng tin tuyển dụng
            miễn phí hoặc trả phí.{" "}
          </li>
          <li>
            3. Hỗ trợ ứng tuyển: Người tìm việc có thể nhận được sự hỗ trợ từ
            đội ngũ chuyên gia trong quá trình ứng tuyển.
          </li>
          <li>
            4. Tư vấn nghề nghiệp: Người tìm việc có thể nhận được tư vấn về
            nghề nghiệp từ các chuyên gia.
          </li>
          Chúng tôi luôn nỗ lực để mang đến cho người tìm việc và nhà tuyển dụng
          những dịch vụ tốt nhất.
        </ul>
        <br />
        <h1 className="text-3xl text-navbar font-bold mb-5">
          Đội ngũ nhân viên của chúng tôi
        </h1>
        <p>
          Đội ngũ nhân viên của{" "}
          <a href="/" className="text-navbar font-bold text-xl">
            Speed<span className="text-[#8d3b94]">JOB</span>
          </a>
          là những người có kinh nghiệm và chuyên môn trong lĩnh vực việc làm.
          Chúng tôi luôn nỗ lực để mang đến cho người tìm việc và nhà tuyển dụng
          những trải nghiệm tốt nhất. Chúng tôi tự hào là một đội ngũ trẻ trung,
          năng động và sáng tạo. Chúng tôi luôn tìm kiếm những cách thức mới để
          cải thiện nền tảng của mình.
        </p>
        <br />
        <h1 className="text-3xl text-navbar font-bold mb-5">
          Các thành tựu của chúng tôi
        </h1>
        <p>
          <a href="/" className="text-navbar font-bold text-xl">
            Speed<span className="text-[#8d3b94]">JOB</span>
          </a>
          đã giúp hàng nghìn người tìm được công việc mơ ước của mình. Được vinh
          danh là một trong những nền tảng tuyển dụng tốt nhất tại Việt Nam.
          Được tin tưởng bởi các nhà tuyển dụng hàng đầu tại Việt Nam. Chúng tôi
          sẽ tiếp tục nỗ lực để đạt được những thành tựu cao hơn nữa trong tương
          lai.
        </p>
      </div>
    </div>
  );
};

export default About;
