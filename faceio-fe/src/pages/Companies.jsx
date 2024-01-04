import React, {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {CompanyCard, CustomButton, Header, ListBox} from "../components";
import {companies} from "../utils/data";

const Companies = () => {
  const [page, setPage] = useState(1);
  const [numPage, setNumPage] = useState(1);
  const [recordsCount, setRecordsCount] = useState(100);
  const [data, setData] = useState(companies ?? []);
  const [searchQuery, setSearchQuery] = useState("");
  const [cmpLocation, setCmpLocation] = useState("");
  const [sort, setSort] = useState("Mới nhất");
  const [isFetching, setIsFetching] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const handleSearchSubmit = () => {
    console.log(2222);
  };
  const handleShowMore = () => {};

  return (
    <div className="w-full">
      <Header
        title="Tìm việc mơ ước thật dễ dàng"
        handleClick={handleSearchSubmit}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        location={cmpLocation}
        setLocation={setSearchQuery}
      />

      <div className="container mx-auto flex flex-col gap-5 2xl:gap-10 px-5 md:px-0 py-6 bg-[#f7fdfd]">
        <div className="flex items-center justify-between mb-4">
          <p className="text-sm md:text-base">
            Kết quả: <span className="font-semibold">1,902</span> Việc làm Có
            sẵn
          </p>

          <div className="flex flex-col md:flex-row gap-0 md:gap-2 md:items-center">
            <p className="text-sm md:text-base">Sắp xếp theo:</p>

            <ListBox sort={sort} setSort={setSort} />
          </div>
        </div>

        <div className="w-full flex flex-col gap-6">
          {data?.map((cmp, index) => (
            <CompanyCard cmp={cmp} key={index} />
          ))}

          {isFetching && (
            <div className="mt-10">
              <Loading />
            </div>
          )}

          <p className="text-sm text-right">
            {data?.length} công việc trong {recordsCount}
          </p>
        </div>

        {numPage > page && !isFetching && (
          <div className="w-full flex items-center justify-center pt-16">
            <CustomButton
              onClick={handleShowMore}
              title="Load More"
              containerStyles={`text-blue-600 py-1.5 px-5 focus:outline-none hover:bg-blue-700 hover:text-white rounded-full text-base border border-blue-600`}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Companies;
