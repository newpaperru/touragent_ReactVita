import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { FilterPattern } from "../components/SearchPage/FilterPattern/FilterPattern";
import { PackagesData } from "../components/SearchPage/PackagesData/PackagesData";
import { useArchiveData } from "../components/SearchPage/FilterPattern/useArchiveData";
import { Pagination } from "../components/SearchPage/Pagination/Pagination";

import searchImg from "/searchHeaderImg.png";
import FilterCalendar from "../assets/Icons/filterCalendar.svg?react";
import PriceHighFilter from "../assets/Icons/priceHighFilter.svg?react";
import PriceLowFilter from "../assets/Icons/priceLowFilter.svg?react";
import Redo from "../assets/Icons/packagesRedo.svg?react"

import middleHeaderStyles from "../components/Header/MiddleHeader/MiddleHeader.module.css";
import headerStyles from "../components/Header/Header.module.css";
import searchStyles from "../components/SearchPage/FilterPattern/FilterPattern.module.css";

const filter = [
    { id: 1, text: "Date", icon: <FilterCalendar />, sortKey: "date" },
    { id: 2, text: "Price Low to High", icon: <PriceHighFilter />, sortKey: "price-asc" },
    { id: 3, text: "Price High to Low", icon: <PriceLowFilter />, sortKey: "price-desc" },
    { id: 4, text: "Redo", icon: <Redo />, sortKey: null },
];

export const SearchPage = () => {
    const {
        filteredData,
        fullFilteredData,
        activeFilter,
        setActiveFilter,
        textFilters,
        setTextFilters,
        resetFilter,
        currentPage,
        totalPages,
        goToPage,
        isLoading,
        error
    } = useArchiveData();

    const handleFilterClick = (sortKey) => {
        if (sortKey === null) {
            resetFilter();
        } else {
            setActiveFilter(sortKey);
            goToPage(1);
        }
    };

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <>
            <Header
                title="Search tour"
                description="Travel With Us"
                imgSrc={searchImg}
                bgFiltered={headerStyles.others_page_filter}
                handClass={middleHeaderStyles.content_alt}
            />
            <FilterPattern>
                {filter.map((item) => (
                    <button 
                        key={item.id} 
                        className={`${searchStyles.filter_element} ${
                            activeFilter === item.sortKey ? searchStyles.active : ''
                        }`}
                        onClick={() => handleFilterClick(item.sortKey)}
                    >
                        {item.icon}
                        {item.text}
                    </button>
                ))}
            </FilterPattern>
            <PackagesData 
                archiveData={filteredData} 
                textFilters={textFilters}
                onTextFilterChange={setTextFilters}
            />
            {fullFilteredData.length > 0 && (
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={goToPage}
                />
            )}
            <Footer />
        </>
    );
};