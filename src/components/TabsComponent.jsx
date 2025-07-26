import React from "react";
import { Tabs, Tab, Card, CardBody } from "@heroui/react";

const TabsComponent = ({ tabs, ...props }) => {
    return (
        <div className="flex w-full flex-col">
            <Tabs aria-label="Dynamic tabs" className="mb-1 p-2 pb-4 overflow-x-auto overflow-y-hidden custom2 cusxscroll">
                {tabs.map(({ id, tabName, tabContent: TabContent }) => (
                    <Tab key={id} title={
                        <div className="inline-flex items-center justify-center px-5 py-2.5 bg-cus-black-low rounded-md text-white font-semibold whitespace-nowrap">
                            {tabName}
                        </div>
                    }
                    >
                        <Card className="bg-white border border-gray-300 rounded-md overflow-visible">
                            <CardBody className="flex items-center justify-center text-black font-normal rounded-md p-0 overflow-x-hidden">
                                <TabContent {...props} />
                            </CardBody>
                        </Card>
                    </Tab>
                ))}
            </Tabs>
        </div>
    )
}

export default TabsComponent;
