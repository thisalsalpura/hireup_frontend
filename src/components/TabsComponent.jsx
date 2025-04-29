import React from "react";
import { Tabs, Tab, Card, CardBody } from "@heroui/react";
import Button from "./Button";

const TabsComponent = () => {
    return (
        <div className="flex w-full flex-col">
            <Tabs aria-label="Dynamic tabs" className="pb-3">
                <Tab title="Bronze" className="bg-cus-black-low rounded-3xl text-white font-semibold p-5">
                    <Card className="overflow-visible">
                        <CardBody className="flex justify-between p-1 bg-cus-black-low rounded-lg shadow-2xl">
                            <p className="text-base font-medium text-white tracking-wide">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                            <Button name="Continue" containerClass="mt-6" frontClasses="text-white h-10 w-full border-2 border-white" backClasses="h-10 w-full bg-cus-dark-purple" />
                        </CardBody>
                    </Card>
                </Tab>

                <Tab title="Silver" className="bg-cus-black-low rounded-3xl text-white font-semibold p-5">
                    <Card className="overflow-visible">
                        <CardBody className="flex justify-between p-1 bg-cus-black-low rounded-lg shadow-2xl">
                            <p className="text-base font-medium text-white tracking-wide">
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </p>
                            <Button name="Continue" containerClass="mt-6" frontClasses="text-white h-10 w-full border-2 border-white" backClasses="h-10 w-full bg-cus-dark-purple" />
                        </CardBody>
                    </Card>
                </Tab>

                <Tab title="Gold" className="bg-cus-black-low rounded-3xl text-white font-semibold p-5">
                    <Card className="overflow-visible">
                        <CardBody className="flex justify-between p-1 bg-cus-black-low rounded-lg shadow-2xl">
                            <p className="text-base font-medium text-white tracking-wide">
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <Button name="Continue" containerClass="mt-6" frontClasses="text-white h-10 w-full border-2 border-white" backClasses="h-10 w-full bg-cus-dark-purple" />
                        </CardBody>
                    </Card>
                </Tab>
            </Tabs>
        </div>
    )
}

export default TabsComponent;