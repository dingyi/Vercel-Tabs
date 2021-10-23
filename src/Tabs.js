import React from "react";
import styled from "styled-components";

const tabsData = [
  {
    title: "Saved sites",
    value: "sites"
  },
  {
    title: "Collections",
    value: "collections"
  },
  {
    title: "48 Following",
    value: "following"
  },
  {
    title: "32 Followers",
    value: "followers"
  }
];

const Tabs = () => {
  const [tabBoundingBox, setTabBoundingBox] = React.useState(null);
  const [wrapperBoundingBox, setWrapperBoundingBox] = React.useState(null);
  const [highlightedTab, setHighlightedTab] = React.useState(null);
  const [isHoveredFromNull, setIsHoveredFromNull] = React.useState(true);

  const highlightRef = React.useRef(null);
  const wrapperRef = React.useRef(null);

  const repositionHighlight = (e, tab) => {
    setTabBoundingBox(e.target.getBoundingClientRect());
    setWrapperBoundingBox(wrapperRef.current.getBoundingClientRect());
    setIsHoveredFromNull(!highlightedTab);
    setHighlightedTab(tab);
  };

  const resetHighlight = () => setHighlightedTab(null);

  const highlightStyles = {};

  if (tabBoundingBox && wrapperBoundingBox) {
    highlightStyles.transitionDuration = isHoveredFromNull ? "0ms" : "150ms";
    highlightStyles.opacity = highlightedTab ? 1 : 0;
    highlightStyles.width = `${tabBoundingBox.width}px`;
    highlightStyles.transform = `translate(${
      tabBoundingBox.left - wrapperBoundingBox.left
    }px)`;
  }

  return (
    <TabsNav ref={wrapperRef} onMouseLeave={resetHighlight}>
      <TabsHighlight ref={highlightRef} style={highlightStyles} />
      {tabsData.map((tab) => (
        <Tab key={tab.value} onMouseOver={(ev) => repositionHighlight(ev, tab)}>
          {tab.title}
        </Tab>
      ))}
    </TabsNav>
  );
};

const TabsNav = styled.div`
  position: relative;
`;

const Tab = styled.a`
  padding: 16px 12px;
  font-size: ${14 / 16}rem;
  color: hsl(0 0% 43.5%);
  display: inline-block;
  position: relative;
  cursor: pointer;
  transition: color 250ms;

  &:hover {
    color: hsl(0 0% 9%);
  }
`;

const TabsHighlight = styled.div`
  background: hsl(0 0% 90.9%);
  position: absolute;
  top: 9px;
  left: 0;
  border-radius: 4px;
  height: 32px;
  transition: 0.15s ease;
  transition-property: width, transform, opacity;
`;

export default Tabs;
