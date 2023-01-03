import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { client } from "../client";

import { feedQuery, searchQuery } from "../utils/data";

import MasonryLayout from "./MasonryLayout";
import Spinner from "./Spinner";

const Feed = () => {
  const [loading, setLoading] = useState(false);
  const [pins, setPins] = useState(null);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    if (categoryId) {
      const query = searchQuery(categoryId);
      client.fetch(query).then((data) => {
        setPins(data);
        setLoading(true);
      });
    } else {
        client.fetch().then(data => {
            setPins(data);
            setLoading(false);
        })
    }
  }, []);
  if (loading)
    return <Spinner message="We are adding new Ideas to your feed" />;
  return <div>Feed</div>;
};

export default Feed;
