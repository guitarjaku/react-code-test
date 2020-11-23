import { useState, useEffect, Fragment } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import th from "date-fns/locale/th";
import { Container, Navbar, Row, Col, Table } from "react-bootstrap";
import Pagination from "react-js-pagination";
import Select from "react-select";
import BlockUi from "react-block-ui";
import axios from "axios";
registerLocale("th", th);

const http = axios.create({
  // baseURL: process.env.api,
  baseURL: "https://my-json-server.typicode.com/guitarjaku/react-code-test",
  headers: {
    "Content-type": "application/json",
  },
});

const App = () => {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [paging, setPaging] = useState({
    page: 1,
    pageSize: 10,
    total: 0,
    runNum: 0,
  });
  const [sortFirstName, setSortFirstName] = useState(0);
  const [sortLastName, setSortLastName] = useState(0);
  const [sortGender, setSortGender] = useState(0);
  const [blocking, handleBlocking] = useState(false);
  const [dataTable, setDataTable] = useState([]);
  const [inputValue, setValue] = useState("");
  const [selectedValue, setSelectedValue] = useState(null);

  const [options, setOption] = useState([]);

  const getEmployees = async () => {
    let dataQuery = "";

    if (sortFirstName === 1) {
      dataQuery = "?_sort=first_name&_order=asc";
    } else if (sortFirstName === 2) {
      dataQuery = "?_sort=first_name&_order=desc";
    }

    if (sortLastName === 1) {
      dataQuery = "?_sort=last_name&_order=asc";
    } else if (sortLastName === 2) {
      dataQuery = "?_sort=last_name&_order=desc";
    }

    if (sortGender === 1) {
      dataQuery = "?_sort=gender&_order=asc";
    } else if (sortGender === 2) {
      dataQuery = "?_sort=gender&_order=desc";
    }

    await http
      .get(`/employee${dataQuery}`)
      .then((res) => {
        // console.log("res", res);
        setDataTable(res.data);
        setPaging({ ...paging, total: res.data.length });
        handleBlocking(false);
      })
      .catch((err) => console.log(err));
  };

  const onClickPage = async (props: any) => {
    let dataQuery = "";
    setPaging({
      ...paging,
      page: props,
      runNum: paging.pageSize * (props - 1),
    });

    if (sortFirstName === 1) {
      dataQuery = "?_sort=first_name&_order=asc";
    } else if (sortFirstName === 2) {
      dataQuery = "?_sort=first_name&_order=desc";
    }

    if (sortLastName === 1) {
      dataQuery = "?_sort=last_name&_order=asc";
    } else if (sortLastName === 2) {
      dataQuery = "?_sort=last_name&_order=desc";
    }

    if (sortGender === 1) {
      dataQuery = "?_sort=gender&_order=asc";
    } else if (sortGender === 2) {
      dataQuery = "?_sort=gender&_order=desc";
    }
    await http
      .get(`/employee${dataQuery}?_page=${props}&_limit=${paging.pageSize}`)
      .then((res) => {
        // console.log("res", res);
        setDataTable(res.data);
        setOption(res.data);
        // setPaging({ ...paging, total: res.data.length });
        handleBlocking(false);
      })
      .catch((err) => console.log(err));
  };

  const handleInputChange = (value) => {
    http.get(`/employee?first_name_like=${value}`).then((res) => {
      setOption(res.data);
    });
    setValue(value);
  };

  const handleChange = (value) => {
    setSelectedValue(value);
  };

  const loadOptions = async (inputValue, callback) => {
    // const res = await http.get(`/employee?first_name_like=${inputValue}`);
    // console.log(res);
    // callback(res.data);
  };

  useEffect(() => {
    handleBlocking(true);
    getEmployees();
  }, [sortFirstName, sortLastName, sortGender]);

  return (
    <Fragment>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={"/logo192.png"}
            width="30"
            height="30"
            className="d-inline-block align-top mr-2"
          />
          React Bootstrap
        </Navbar.Brand>
      </Navbar>
      {/* <Button onClick={() => handleBlocking(!blocking)} color="primary">
        Toggle Block
      </Button> */}
      <BlockUi tag="div" blocking={blocking}>
        <Container fluid className="mb-4">
          <Row>
            <Col xs={12} sm={6}>
              <div className="w-100 text-sm-right text-center mt-2">
                <span>Date : </span>
                <DatePicker
                  locale="th"
                  selected={date}
                  onChange={(date) => setDate(date)}
                />
              </div>
            </Col>
            <Col xs={12} sm={6}>
              <div className="w-100 text-sm-left text-center mt-2">
                <span>Time : </span>
                <DatePicker
                  selected={time}
                  onChange={(date) => setTime(date)}
                  showTimeInput
                  showTimeSelectOnly
                  timeCaption="Time"
                  dateFormat="HH:mm"
                />
              </div>
            </Col>
          </Row>
          <Row className="mt-2">
            <div className="d-flex w-100 px-3">
              <div className="form-group mr-auto">
                <select
                  className="form-control"
                  id="item"
                  value={paging.pageSize}
                  onChange={(event) => {
                    setPaging({ ...paging, pageSize: +event.target.value });
                  }}
                >
                  <option value={10}>10</option>
                  <option value={20}>20</option>
                  <option value={30}>30</option>
                  <option value={50}>50</option>
                  <option value={100}>100</option>
                </select>
              </div>

              <div className="text-right">
                <Pagination
                  hideDisabled
                  itemClass="page-item"
                  linkClass="page-link"
                  // firstPageText="First"
                  // lastPageText="Last"
                  pageRangeDisplayed={3}
                  activePage={paging.page}
                  itemsCountPerPage={paging.pageSize}
                  totalItemsCount={paging.total}
                  onChange={(pageNumber) => {
                    handleBlocking(true);
                    onClickPage(pageNumber);
                  }}
                />
              </div>
            </div>
            {/* <div onClick={() => hanedleSort()}>click</div> */}
            <Col xs={12}>
              <Table responsive bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th
                      onClick={() => {
                        // console.log(sortFirstName);
                        setSortLastName(0);
                        setSortGender(0);
                        if (sortFirstName === 0) {
                          setSortFirstName(1);
                        } else if (sortFirstName === 1) {
                          setSortFirstName(2);
                        } else {
                          setSortFirstName(1);
                        }
                      }}
                    >
                      First Name
                      {sortFirstName === 0 && (
                        <img
                          src={
                            "icons/sort-arrows-couple-pointing-up-and-down.png"
                          }
                          height="16"
                        />
                      )}
                      {sortFirstName === 1 && (
                        <img src={"icons/caret-down.png"} height="16" />
                      )}
                      {sortFirstName === 2 && (
                        <img src={"icons/sort-up.png"} height="16" />
                      )}
                    </th>
                    <th
                      onClick={() => {
                        // console.log(sortFirstName);
                        setSortFirstName(0);
                        setSortGender(0);
                        if (sortLastName === 0) {
                          setSortLastName(1);
                        } else if (sortLastName === 1) {
                          setSortLastName(2);
                        } else {
                          setSortLastName(1);
                        }
                      }}
                    >
                      Last Name
                      {sortLastName === 0 && (
                        <img
                          src={
                            "icons/sort-arrows-couple-pointing-up-and-down.png"
                          }
                          height="16"
                        />
                      )}
                      {sortLastName === 1 && (
                        <img src={"icons/caret-down.png"} height="16" />
                      )}
                      {sortLastName === 2 && (
                        <img src={"icons/sort-up.png"} height="16" />
                      )}
                    </th>
                    {/* <th>Email</th> */}
                    <th
                      onClick={() => {
                        setSortFirstName(0);
                        setSortLastName(0);
                        // console.log(sortFirstName);
                        if (sortGender === 0) {
                          setSortGender(1);
                        } else if (sortGender === 1) {
                          setSortGender(2);
                        } else {
                          setSortGender(1);
                        }
                      }}
                    >
                      Gender
                      {sortGender === 0 && (
                        <img
                          src={
                            "icons/sort-arrows-couple-pointing-up-and-down.png"
                          }
                          height="16"
                        />
                      )}
                      {sortGender === 1 && (
                        <img src={"icons/caret-down.png"} height="16" />
                      )}
                      {sortGender === 2 && (
                        <img src={"icons/sort-up.png"} height="16" />
                      )}
                    </th>
                    {/* <th>IP Address</th> */}
                  </tr>
                </thead>
                <tbody>
                  {dataTable &&
                    dataTable.map(
                      (row, i) =>
                        i < paging.pageSize && (
                          <tr key={i}>
                            <td>{paging.runNum + (i + 1)}</td>
                            <td>{row.first_name}</td>
                            <td>{row.last_name}</td>
                            {/* <td>{row.email}</td> */}
                            <td>{row.gender}</td>
                            {/* <td>{row.ip_address}</td> */}
                          </tr>
                        )
                    )}
                </tbody>
              </Table>
            </Col>
            <Col xs={12}>
              <pre>inputValue: "{inputValue}"</pre>
              {/* <AsyncSelect
                cacheOptions
                defaultOptions
                value={selectedValue}
                getOptionLabel={(e) => e.first_name}
                getOptionValue={(e) => e.id}
                loadOptions={loadOptions}
                onInputChange={handleInputChange}
                onChange={handleChange}
              /> */}
              <Select
                className="mb-3"
                cacheOptions
                defaultOptions
                getOptionLabel={(e) => e.first_name}
                getOptionValue={(e) => e.id}
                options={options}
                onInputChange={handleInputChange}
                onChange={handleChange}
              />
              <pre>
                Selected Value: {JSON.stringify(selectedValue || {}, null, 2)}
              </pre>
            </Col>
          </Row>
        </Container>
      </BlockUi>
    </Fragment>
  );
};

export default App;
