import { Tabs, Tab, Card, CardBody } from "@heroui/react";

const TabsComponents = () => {
    return (
        <div className="flex w-full flex-col">
            <Tabs aria-label="Dynamic tabs" className="bg-white shadow-2xl rounded-lg">
                <Tab title="Bronze">
                    <Card className="bg-cus-black-low rounded-lg shadow-2xl">
                        <CardBody className="text-base text-white tracking-wide">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</CardBody>
                    </Card>
                </Tab>

                <Tab title="Silver">
                    <Card className="bg-cus-black-low rounded-lg shadow-2xl">
                        <CardBody className="text-base text-white tracking-wide">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</CardBody>
                    </Card>
                </Tab>

                <Tab title="Gold">
                    <Card className="bg-cus-black-low rounded-lg shadow-2xl">
                        <CardBody className="text-base text-white tracking-wide">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</CardBody>
                    </Card>
                </Tab>
            </Tabs>
        </div>
    )
}

export default TabsComponents;