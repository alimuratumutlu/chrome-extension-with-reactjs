import React, { useState } from "react";
import PropTypes from "prop-types";

// Pinterest Gestalt Import
import {
  Avatar,
  Box,
  IconButton,
  Icon,
  SearchField,
  SelectList,
  Text
} from "gestalt";

const Navbar = () => {
  const siteList = [
    {
      value: "a",
      label: "Sağlık Sitelerim"
    },
    {
      value: "b",
      label: "Hosting Sitelerim"
    },
    {
      value: "c",
      label: "Tatil Sitelerim"
    }
  ];

  const [searchValue, setSearchValue] = useState();
  const [selectedList, setSelectedList] = useState();

  const handleListChange = value => {
    setSelectedList(value);
  };

  return (
    <div className="flex bg-white border-b border-gray-200 fixed top-0 inset-x-0 z-100 h-16 items-center">
      <div className="w-full max-w-screen-xl relative px-6">
        <div className="flex items-center">
          <div className="flex flex-grow lg:w-3/4 xl:w-4/5">
            <div className="w-full lg:px-6 xl:px-12">
              <div className="relative">
                <Box
                  color="white"
                  shape="rounded"
                  padding={3}
                  display="flex"
                  direction="row"
                  alignItems="center"
                >
                  <Box alignItems="center" display="flex">
                    <Box marginRight={1} padding={1}>
                      <Icon
                        icon="ads-stats"
                        accessibilityLabel="Stats"
                        color="darkGray"
                      />
                    </Box>
                    <Text align="center" color="darkGray" weight="bold">
                      SEO Dashboard
                    </Text>
                  </Box>
                  <Box flex="grow" paddingX={2}>
                    <SearchField
                      accessibilityLabel="Demo Search Field"
                      id="searchField"
                      onChange={() => setSearchValue(searchValue)}
                      placeholder="Search and explore"
                      value={searchValue}
                    />
                  </Box>
                  <Box paddingX={2}>
                    <IconButton
                      accessibilityLabel="Notifications"
                      icon="speech-ellipsis"
                      size="md"
                    />
                  </Box>
                  <Box paddingX={2}>
                    <IconButton
                      accessibilityLabel="Profile"
                      icon="person"
                      size="md"
                    />
                  </Box>
                </Box>
              </div>
            </div>

            <div className="hidden lg:flex lg:items-center lg:justify-between xl:w-1/4 px-6">
              <div className="relative mr-4">
                <SelectList
                  id="city"
                  name="city"
                  onChange={() => handleListChange()}
                  options={siteList}
                  placeholder="Workspaces"
                  value={selectedList}
                />
              </div>
              <div className="flex justify-start items-center text-gray-500">
                <Avatar
                  name="Murat"
                  size="md"
                  src="https://pbs.twimg.com/media/ERE98ZNXUAArKWu?format=jpg"
                  verified
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
