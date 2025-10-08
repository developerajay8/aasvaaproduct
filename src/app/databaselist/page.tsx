'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';
import Header from '../components/header';
import Upgrade from '../components/upgrade';

// Dummy data
const allData = [
  { id: 1, reportNo: '277', date: '00/00/0000', name: 'Short title, extent and commencement', type: 'acts' },
  { id: 2, reportNo: '278', date: '01/01/2024', name: 'Definitions and interpretations', type: 'acts' },
  { id: 3, reportNo: '279', date: '02/01/2024', name: 'Application of the Act', type: 'acts' },
  { id: 4, reportNo: '280', date: '03/01/2024', name: 'Powers and duties', type: 'bills' },
  { id: 5, reportNo: '281', date: '04/01/2024', name: 'Financial provisions', type: 'bills' },
  { id: 6, reportNo: '282', date: '05/01/2024', name: 'Amendment procedures', type: 'bills' },
  { id: 7, reportNo: '283', date: '06/01/2024', name: 'General rules and regulations', type: 'rules' },
  { id: 8, reportNo: '284', date: '07/01/2024', name: 'Procedural requirements', type: 'rules' },
  { id: 9, reportNo: '285', date: '08/01/2024', name: 'Compliance standards', type: 'rules' },
  { id: 10, reportNo: '286', date: '09/01/2024', name: 'Executive order provisions', type: 'order' },
  { id: 11, reportNo: '287', date: '10/01/2024', name: 'Administrative directives', type: 'order' },
  { id: 12, reportNo: '288', date: '11/01/2024', name: 'Municipal ordinances', type: 'ordinance' },
  { id: 13, reportNo: '289', date: '12/01/2024', name: 'Local body regulations', type: 'ordinance' },
  { id: 14, reportNo: '290', date: '13/01/2024', name: 'Public notification requirements', type: 'notification' },
  { id: 15, reportNo: '291', date: '14/01/2024', name: 'Official gazette notices', type: 'notification' },
  { id: 16, reportNo: '292', date: '15/01/2024', name: 'Regulatory framework', type: 'regulation' },
  { id: 17, reportNo: '293', date: '16/01/2024', name: 'Implementation guidelines', type: 'regulation' },
  { id: 18, reportNo: '294', date: '17/01/2024', name: 'Scheme formulation process', type: 'schemes' },
  { id: 19, reportNo: '295', date: '18/01/2024', name: 'Benefits and eligibility criteria', type: 'schemes' },
  { id: 20, reportNo: '296', date: '19/01/2024', name: 'Monitoring and evaluation', type: 'schemes' },
];

export default function Page() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'acts', label: 'Acts' },
    { id: 'bills', label: 'Bills' },
    { id: 'rules', label: 'Rules' },
    { id: 'order', label: 'Order' },
    { id: 'ordinance', label: 'Ordinance' },
    { id: 'notification', label: 'Notification' },
    { id: 'regulation', label: 'Regulation' },
    { id: 'schemes', label: 'Schemes' },
  ];

  const filteredData = allData.filter(item => {
    const matchesFilter = activeFilter === 'all' || item.type === activeFilter;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.reportNo.includes(searchQuery);
    return matchesFilter && matchesSearch;
  });

  return (
   
 <div className="w-full h-screen overflow-hidden">
        <div className="flex">
        <div className="w-[7%] bg-[#1E1E1E] py-[24px] px-[24.5px] flex flex-col justify-between overflow-y-auto h-screen">
            <Header />
          </div>


      <div className="bg-[#F9F9F9] w-full pt-[30px] overflow-y-auto h-screen flex flex-col ">
        <Upgrade />
        <div className="m-8">

        {/* Search Bar */}
        <div className="mb-6 flex flex-col sm:flex-row gap-3">
          <div className="max-w-[242px] flex-1">
            <input
              type="text"
              placeholder="Type here to search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-[13px] text-[14px] text-[#7E7E84] pr-24 border-[1px] border-[#D5D5D5] rounded-[6px] focus:outline-none focus:ring-[#D5D5D5]"
            />
            
          </div>
     
            <button className=" w-auto   bg-[#1E1E1E] text-[#FAFAFA] px-4 py-3 rounded-[6px] hover:bg-[#292929] transition-colors cursor-pointer">
              Search
            </button>
         
          <button className="px-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors sm:w-auto">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
            </svg>
          </button>
        </div>

        {/* Filter Buttons */}
        <div className="mb-12 grid grid-cols-9  gap-2 w-full">
  {filters.map((filter) => (
    <button
      key={filter.id}
      onClick={() => setActiveFilter(filter.id)}
      className={`w-full px-6 py-2 rounded-[6px] font-medium cursor-pointer transition-all ${
        activeFilter === filter.id
          ? "bg-[#1E1E1E] text-[#FAFAFA]"
          : "bg-[#F1F1F1] text-gray-700 border border-gray-300 hover:bg-gray-50"
      }`}
    >
      {filter.label}
    </button>
  ))}
</div>


        {/* Title */}
        <h3 className="text-2xl text-[#000000] md:text-4xl font-medium mb-6">Act/Rules Title</h3>

        {/* Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-900 text-white ">
                <tr>
                  <th className="px-6 py-4  text-sm text-left font-semibold">Report No.</th>
                  <th className="px-6 py-4  text-sm text-left font-semibold">Date</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Name</th>
                  <th className="px-6 py-4"></th>
                </tr>
              </thead>
              <tbody className="divide-y  divide-[#3d3d3d]">
                {filteredData.map((item, index) => (
                  <tr key={item.id} className="bg-[#B3B3B3]">
                    <td className="px-6 py-4  text-sm text-gray-900">{item.reportNo}</td>
                    <td className="px-6 py-4   text-sm text-gray-900">{item.date}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{item.name}</td>
                    <td className="px-6 py-4 text-right">
                      <button className="bg-gray-900 text-white px-6 py-2 rounded hover:bg-gray-800 transition-colors text-sm font-medium">
                        Read
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden">
            {filteredData.map((item) => (
              <div key={item.id} className="border-b border-gray-200 p-4">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex-1">
                    <div className="flex gap-4 text-sm text-gray-600 mb-2">
                      <span className="font-semibold">No. {item.reportNo}</span>
                      <span>{item.date}</span>
                    </div>
                    <p className="text-gray-900 font-medium">{item.name}</p>
                  </div>
                </div>
                <button className="w-full bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors text-sm font-medium">
                  Read
                </button>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredData.length === 0 && (
            <div className="p-8 text-center text-gray-500">
              No results found for your search criteria.
            </div>
          )}
        </div>

        </div>
      </div>
      </div>
    </div>
  );
}