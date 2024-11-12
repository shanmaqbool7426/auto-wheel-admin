'use client';
import React, { useState, useEffect } from 'react';
import { usePathname, useParams } from 'next/navigation'
import Link from 'next/link';
import { Box, NavLink, Collapse } from '@mantine/core';
import { navMenu } from './data';
import { IconAngleDown, IconEllipse } from '@/assets/icons';
import classes from './Navbar.module.css';

export default function Navbar() {
  const { activeTab } = useParams();
  const pathname = usePathname();
  const [openedMenu, setOpenedMenu] = useState(null);
  const [activeItem, setActiveItem] = useState(null);
  const [activeSubItem, setActiveSubItem] = useState(null);

  const splitPath = pathname.split('/').slice(0, 3).join('/');

  useEffect(() => {
    const mainItem = navMenu.find((item) => {
      const itemHref = activeTab ? `${item.href}/${activeTab}` : item.href;
      return itemHref === pathname
    });

    if (mainItem) {
      setActiveItem(mainItem.label);
      setOpenedMenu(mainItem.links ? mainItem.label : null);

      // Set first child active if it has the same route
      if (mainItem.links && mainItem.links[0].href === pathname) {
        setActiveSubItem(mainItem.links[0].label);
      } else {
        setActiveSubItem(null);
      }
    } else {
      const subItemParent = navMenu.find((item) =>
        item.links?.some((link) => {
          const itemHref = activeTab ? `${link.href}/${activeTab}` : link.href;
          return itemHref === pathname
        })
      );
      if (subItemParent) {
        setActiveItem(subItemParent.label);
        setOpenedMenu(subItemParent.label);
        setActiveSubItem(
          subItemParent.links.find((link) => link.href === pathname)?.label
        );
      }
    }
  }, [pathname, activeTab]);

  const handleMenuClick = (label) => {
    setOpenedMenu(openedMenu === label ? null : label);
    setActiveItem(label);
  };

  return (
    <Box component="ul" className={classes?.menu}>
      {navMenu.map((item) => (
        <Box component="li" key={item.label}>
          <NavLink
            component={Link}
            href={item.href}
            label={item.label}
            leftSection={<item.icon />}
            rightSection={item.links ? <IconAngleDown /> : null}
            active={activeItem === item.label}
            className={activeItem === item.label ? 'active' : ''}
            variant="filled"
            color="#EB2321"
            onClick={() => handleMenuClick(item.label)}
            classNames={{
              root: classes.root,
              label: classes.label,
            }}
          />
          {item.links && (
            <Collapse in={openedMenu === item.label}>
              <Box component='ul' className={classes?.subMenu}>
                {item.links.map((link) => (
                  <Box component="li" key={link.label}>
                    <NavLink
                      component={Link}
                      href={link.href}
                      label={link.label}
                      leftSection={<IconEllipse />}
                      active={activeSubItem === link.label}
                      className={activeSubItem === link.label ? 'active' : ''}
                      variant="subtle"
                      color="#EB2321"
                      classNames={{
                        root: classes.rootSubmenu,
                        label: classes.labelSubmenu,
                      }}
                    />
                  </Box>
                ))}
              </Box>
            </Collapse>
          )}
        </Box>
      ))}
    </Box>
  )
}
