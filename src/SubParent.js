import { useState, useEffect } from "react";

export default function SubParent(props) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setInterval(() => {
      setVisible(true);
    }, 14000);
  }, []);

  if (visible) return props.children;
  else return null;
  // return <div>{props.children}</div>;
}
