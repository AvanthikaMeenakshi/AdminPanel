import React from 'react';
import { Card, CardBody, Col, Badge, Table } from 'reactstrap';

const ResponsiveTable = () => (
  <Col md={12} lg={12}>
    <h3 className="page-title">Users List</h3>
    <h3 className="page-subhead subhead">Use this elements, if you want to show some hints or additional
          information
    </h3>
    <Card>
      <CardBody>
        <Table responsive className="table--bordered">
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Credit</th>
              <th>Usage</th>
              <th>Notes</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Maria Morisson</td>
              <td>email@gmail.com</td>
              <td>$21</td>
              <td>30MB</td>
              <td>{`Lorem Ipsum is simply dummy text of the
                printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the
                1500s, when an unknown printer took a galley of type and scrambled it to
                make a type specimen book.`}
              </td>
              <td>
                <Badge color="success">Edit</Badge>
              </td>
            </tr>
            <tr>
              <td>Steve</td>
              <td>email@gmail.com</td>
              <td>$40</td>
              <td>20MB</td>
              <td>{`Lorem Ipsum is simply dummy text of the
                printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the
                1500s, when an unknown printer took a galley of type and scrambled it to
                make a type specimen book.`}
              </td>
              <td>
                <Badge color="success">Edit</Badge>
              </td>
            </tr>
            <tr>
              <td>Loria</td>
              <td>email@gmail.com</td>
              <td>$20</td>
              <td>50MB</td>
              <td>{`Lorem Ipsum is simply dummy text of the
                printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the
                1500s, when an unknown printer took a galley of type and scrambled it to
                make a type specimen book.`}
              </td>
              <td>
                <Badge color="success">Edit</Badge>
              </td>
            </tr>
            <tr>
              <td>Loria</td>
              <td>email@gmail.com</td>
              <td>$20</td>
              <td>50MB</td>
              <td>{`Lorem Ipsum is simply dummy text of the
                printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the
                1500s, when an unknown printer took a galley of type and scrambled it to
                make a type specimen book.`}
              </td>
              <td>
                <Badge color="success">Edit</Badge>
              </td>
            </tr>
            <tr>
              <td>Loria</td>
              <td>email@gmail.com</td>
              <td>$20</td>
              <td>50MB</td>
              <td>{`Lorem Ipsum is simply dummy text of the
                printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the
                1500s, when an unknown printer took a galley of type and scrambled it to
                make a type specimen book.`}
              </td>
              <td>
                <Badge color="success">Edit</Badge>
              </td>
            </tr>
            <tr>
              <td>Loria</td>
              <td>email@gmail.com</td>
              <td>$20</td>
              <td>50MB</td>
              <td>{`Lorem Ipsum is simply dummy text of the
                printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the
                1500s, when an unknown printer took a galley of type and scrambled it to
                make a type specimen book.`}
              </td>
              <td>
                <Badge color="success">Edit</Badge>
              </td>
            </tr>
            <tr>
              <td>Loria</td>
              <td>email@gmail.com</td>
              <td>$20</td>
              <td>50MB</td>
              <td>{`Lorem Ipsum is simply dummy text of the
                printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the
                1500s, when an unknown printer took a galley of type and scrambled it to
                make a type specimen book.`}
              </td>
              <td>
                <Badge color="success">Edit</Badge>
              </td>
            </tr>
          </tbody>
        </Table>
      </CardBody>
    </Card>
  </Col>
);

export default ResponsiveTable;
