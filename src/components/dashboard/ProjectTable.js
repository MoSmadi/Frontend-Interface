import { Card, CardBody, CardTitle, CardSubtitle, Table } from "reactstrap";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:8001/api/annotation/';

const ProjectTables = () => {

  const [posts, setPosts] = useState([]);

  // Define the function that fetches the data from API
  const fetchData = async () => {
    const { data } = await axios.get(API_URL);
    setPosts(data);
  };

  // Trigger the fetchData after the initial render by using the useEffect hook
  useEffect(() => {
    fetchData();
  }, []);


  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Pages Listing</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Overview of the pages who used the web global annotation extension
          </CardSubtitle>

          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                <th>Page Name</th>
                <th>Page URL</th>
                <th>Word</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post, index) => (
                <tr key={index} className="border-top">
                  <td>
                    <div className="d-flex align-items-center p-2">
                      <div className="ms-0">
                        <h6 className="mb-0">{post.pageName}</h6>
                      </div>
                    </div>
                  </td>
                    <td> <a href={post.pageURL}> Go to the Website </a></td>
                  <td>
                    {post.text} 
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProjectTables;
