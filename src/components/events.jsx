import React from 'react'
import Navbar from './navbar'
import Rotary from './rotary'
import Footer from './footer'

const Events = () => {
    return (
        <>
            <Navbar />
            <Rotary />
            <h1 className='text-4xl mx-auto flex font-bold max-w-[1640px]  items-center p-2 ml-5 text-blue-950'>District Events 2022-2023</h1>
            <div className='max-w-[1640px] mx-auto p-4 items-center w-full h-full'>

                <div class="relative overflow-x-auto">
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    Events
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Dates
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    DG Installation
                                </th>
                                <td class="px-6 py-4">
                                    19th July 2022
                                </td>

                            </tr>
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Interact Assembly
                                </th>
                                <td class="px-6 py-4">
                                    21st August 2022
                                </td>

                            </tr>
                            <tr class="bg-white dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Membership Seminar
                                </th>
                                <td class="px-6 py-4">
                                    29th August 2022 'Half Day Event'
                                </td>
                            </tr>
                            <tr class="bg-white dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Bike Fellowship
                                </th>
                                <td class="px-6 py-4">
                                    5th September 2022 - Early Morning'
                                </td>
                            </tr>
                            <tr class="bg-white dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    District RYLA
                                </th>
                                <td class="px-6 py-4">
                                    5th September 2022 'Morning Session'
                                </td>
                            </tr>
                            <tr class="bg-white dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Youth Seminar
                                </th>
                                <td class="px-6 py-4">
                                    26th September 2022 'Half Day Session'
                                </td>
                            </tr>
                            <tr class="bg-white dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Trekking Fellowship
                                </th>
                                <td class="px-6 py-4">
                                    3rd October 2022
                                </td>
                            </tr>
                            <tr class="bg-white dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    World Polio Day Celebration 
                                </th>
                                <td class="px-6 py-4">
                                    24th October 2022 'Half Day Event'
                                </td>
                            </tr>
                            <tr class="bg-white dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Service Project & Public image 
                                </th>
                                <td class="px-6 py-4">
                                    31st October 2022 'Half Day Event'
                                </td>
                            </tr>
                            <tr class="bg-white dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Foundation Seminar
                                </th>
                                <td class="px-6 py-4">
                                    27th October 2022 'Half Day Event'
                                </td>
                            </tr>
                            <tr class="bg-white dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    District RYLA
                                </th>
                                <td class="px-6 py-4">
                                    5th December 2022 'Half Day Event'
                                </td>
                            </tr>
                            <tr class="bg-white dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    District Conference
                                </th>
                                <td class="px-6 py-4">
                                    29th & 30th Jan 2023
                                </td>
                            </tr>
                            <tr class="bg-white dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                  Kite Festival 
                                </th>
                                <td class="px-6 py-4">
                                    16th Jan 2023 
                                </td>
                            </tr>
                            <tr class="bg-white dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                  District Conference 
                                </th>
                                <td class="px-6 py-4">
                                    29th & 30th Jan 2023
                                </td>
                            </tr>
                            <tr class="bg-white dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                  DLTS 
                                </th>
                                <td class="px-6 py-4">
                                    28th & 29th May 2023
                                </td>
                            </tr>
                            <tr class="bg-white dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Zonal Meets
                                </th>
                                <td class="px-6 py-4">
                                    TBD as per Requiremenst
                                </td>
                            </tr>
                            <tr class="bg-white dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Special Fellowship Meets
                                </th>
                                <td class="px-6 py-4">
                                TBD as per Requiremenst 
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
            <Footer />
        </>
    )
}

export default Events