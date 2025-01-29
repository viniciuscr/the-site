"use client";

import {
  ActionIcon,
  useMantineColorScheme,
  useComputedColorScheme,
  Popover,
  PopoverTarget,
  PopoverDropdown,
  Text,
} from "@mantine/core";
import { IconSun, IconMoon } from "@tabler/icons-react";
import cx from "clsx";
import classes from "./ColorSwitch.module.css";
import { useEffect, useState } from "react";

function ColorSwitch() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  const [showPopover, setShowPopover] = useState(true);

  // hide popover after 10 seconds, otherwise it's annoying
  useEffect(() => {
    setTimeout(() => {
      setShowPopover(false);
    }, 10000);
  }, []);

  return (
    <Popover
      disabled={!showPopover}
      width={200}
      opened
      position="bottom-end"
      withArrow
      arrowOffset={12}
    >
      <PopoverTarget>
        <ActionIcon
          onClick={() => {
            setColorScheme(computedColorScheme === "light" ? "dark" : "light");
            setShowPopover(false);
          }}
          variant="default"
          size="xl"
          aria-label="Toggle color scheme"
        >
          <IconSun className={cx(classes.icon, classes.light)} stroke={1.5} />
          <IconMoon className={cx(classes.icon, classes.dark)} stroke={1.5} />
        </ActionIcon>
      </PopoverTarget>
      <PopoverDropdown>
        <Text size="xs">
          Not happy with the current color scheme? Try{" "}
          {computedColorScheme === "light" ? "dark" : "light"}
        </Text>
      </PopoverDropdown>
    </Popover>
  );
}
export default ColorSwitch;
