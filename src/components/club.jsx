import React from 'react'
import Navbar from './navbar'
import Rotary from './rotary'
import Footer from './footer'
import { Checkbox } from '@material-tailwind/react'

const Club = () => {
    return (
        <>
            <Navbar />
            <Rotary />
            <div >
                <h1 className='text-4xl mx-auto flex font-bold max-w-[1640px]  items-center p-2 ml-5 text-blue-950'>Governor's Official Club Visit 2022-2023</h1>
                <div className='max-w-[1640px] mx-auto p-4 items-center w-full h-full'>
                    <div className='w-full h-full bg-black/50 rounded-xl text-white   p-5'>
                        <div>
                            <p>Documents / items to be physical shown to AG for verification</p>
                            <p>Submission in soft copy only - 7 days prior to DG visit</p>
                        </div>
                        <br/>
                        <div>
                            <p>1. Club Charter </p>
                            <p>2. Constitution and Bylaws of the club duly amended and signed.</p>
                            <p>3. Audited Balance sheet of club for the year ended on 30 June 2023.</p>
                            <p>4. Club's Trust Deed, 80G Certificate , FCRA registration , Audited Accounts For the year ended on 31 Mar 2023.</p>
                            <p>5. Club Budget copy for the year 2022-2023.</p>
                            <p>6. Copies of club's invoice receipt of RI Dues, District Dues , Magazine subscription.</p>
                            <p>7. Highlights and concise reports of club's current status and strategic planning.</p>
                            <p>8. Club's Committee plans Goals and objectives, plans and action taken in the year.</p>
                            <p>9. Assets of club.</p>
                        </div>
                        <br/>
                        <h1>Only in Soft format</h1>
                        <div>
                            <p>1. Digital uploading of members data, meetings and projects.</p>
                            <p>2. RI website - club Central, Rotary Showcase with idea exchange.</p>
                            <p>3. Reports and reviews of various avenues:</p>

                            <br/>
                            <div class="flex items-center">
                                <input checked id="checked-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                <label for="checked-checkbox" class="ml-2 text-sm font-medium text-white">Membership status - % Growth And % Retention</label>
                            </div>
                            <div className='flex items-center'>
                                <input checked id="checked-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                <label for="checked-checkbox" class="ml-2 text-sm font-medium text-white">Report of Service Projects, RCC , Signature Project.</label>
                            </div>
                            <div className='flex items-center'>
                                <input checked id="checked-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                <label for="checked-checkbox" class="ml-2 text-sm font-medium text-white">Report of Youth, RYE, NGSE.</label>
                            </div>
                            <div className='flex items-center'>
                                <input checked id="checked-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                <label for="checked-checkbox" class="ml-2 text-sm font-medium text-white">Report of Foundation - Contributions / CSR / GLOBAL GRANTS</label>
                            </div>
                            <div className='flex items-center'>
                                <input checked id="checked-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                <label for="checked-checkbox" class="ml-2 text-sm font-medium text-white">Report Of Club's Public Image activities</label>
                            </div>
                            <div className='flex items-center'>
                                <input checked id="checked-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                <label for="checked-checkbox" class="ml-2 text-sm font-medium text-white">Report on Club Administration Activities</label>
                            </div>
                            <div className='flex items-center'>
                                <input checked id="checked-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                <label for="checked-checkbox" class="ml-2 text-sm font-medium text-white">Report on any other Rotary related activities</label>
                            </div>
                            <div className='flex items-center'>
                                <input checked id="checked-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                <label for="checked-checkbox" class="ml-2 text-sm font-medium text-white">Review of Goal setting details</label>
                            </div>
                            <div className='flex items-center'>
                                <input checked id="checked-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                <label for="checked-checkbox" class="ml-2 text-sm font-medium text-white">RI Presidential Citation qualification status</label>
                            </div>
                            <div className='flex items-center'>
                                <input checked id="checked-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                <label for="checked-checkbox" class="ml-2 text-sm font-medium text-white">Participation in District Events , Conference and Ri Convention</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Club