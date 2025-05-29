import React from "react";
import { Tabs, Tab, Card, CardBody } from "@heroui/react";

const TabsComponent = ({ tabName, tabContent }) => {
    return (
        <div className="flex w-full flex-col">
            <Tabs aria-label="Dynamic tabs" className="mb-3 p-2 overflow-x-auto custom2 cusxscroll">
                <Tab title={tabName} className="bg-cus-black-low rounded-md text-white font-semibold p-5">
                    <Card className="overflow-visible pb-4">
                        <CardBody className="flex items-center justify-center text-black font-normal rounded-md shadow-2xl p-1 overflow-x-hidden">
                            {tabContent}
                        </CardBody>
                    </Card>
                </Tab>
            </Tabs>
        </div>
    )
}

export default TabsComponent;