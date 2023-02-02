
import React from "react";
import ContentItem from "./ContentItem";

function ContentList(){
    return(
      
        <div className="bg-white rounded-lg shadow sm:max-w-md sm:w-full sm:mx-auto sm:overflow-hidden ">
              <div class="px-4 py-6 border-t-2 border-gray-200 bg-gray-50 sm:px-10">
                    <p class="text-xs leading-5 text-gray-500">
                        Data from firestore.
                    </p>
                </div>
            <div className="px-4 py-8 sm:px-10">
        <table class="table p-4 bg-white rounded-lg shadow">
            <thead>
                <tr>
                    <th class="border p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                        Doc ID
                    </th>
                    <th class="border p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                        Student name
                    </th>
                    <th class="border p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                        Age
                    </th>
                    <th class="border p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                        Course
                    </th>
                </tr>
            </thead>
            <tbody>
                <ContentItem />
            </tbody>
        </table>
        </div>
        </div>
        )
}
export default ContentList;