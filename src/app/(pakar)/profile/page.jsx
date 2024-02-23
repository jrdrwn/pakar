"use client";

import { useEffect, useMemo, useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import DataTable, { defaultThemes } from "react-data-table-component";
import {
  Chart as ChartJS,
  Tooltip,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

const FilterComponent = ({ filterText, onFilter, onClear }) => (
  <div className="mb-4 flex flex-wrap gap-2">
    <input
      className="input input-bordered"
      id="search"
      type="text"
      placeholder="Filter By Name"
      aria-label="Search Input"
      value={filterText}
      onChange={onFilter}
    />
    <button className="btn btn-square" type="button" onClick={onClear}>
      X
    </button>
  </div>
);

export default function Page() {
  const [categoryCount, setCategoryCount] = useState([]);
  const [profile, setProfile] = useState({});
  const openModal = () => {
    const modal = document.getElementById("edit-profile-modal");
    modal.showModal();
  };

  useEffect(() => {
    fetch("/api/karya/category-list?length=true")
      .then((res) => res.json())
      .then((data) => {
        setCategoryCount(data);
      });
  }, []);

  const handleEditProfile = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const res = await fetch("/api/profile", {
      method: "PUT",
      body: JSON.stringify(Object.fromEntries(data)),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) {
      alert("Gagal mengubah profile.");
    } else {
      alert("Berhasil mengubah profile.");
      location.reload();
    }
  };
  const [karya, setKarya] = useState([]);
  useEffect(() => {
    fetch("/api/profile")
      .then((res) => res.json())
      .then((data) => setProfile(data[0]));
    fetch("/api/karya?tag=me&limit=7000&offset=0")
      .then((res) => res.json())
      .then((data) => {
        data.sort((a, b) => b.price - a.price);
        setKarya(data);
      });
  }, []);
  const [filterText, setFilterText] = useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  const filteredItems = karya.filter(
    (item) =>
      item.title && item.title.toLowerCase().includes(filterText.toLowerCase()),
  );

  const subHeaderComponentMemo = useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText("");
      }
    };

    return (
      <FilterComponent
        onFilter={(e) => setFilterText(e.target.value)}
        onClear={handleClear}
        filterText={filterText}
      />
    );
  }, [filterText, resetPaginationToggle]);

  const customStyles = {
    header: {
      style: {
        minHeight: "56px",
      },
    },
    headRow: {
      style: {
        borderTopStyle: "solid",
        borderTopWidth: "1px",
        borderTopColor: defaultThemes.default.divider.default,
      },
    },
    headCells: {
      style: {
        "&:not(:last-of-type)": {
          borderRightStyle: "solid",
          borderRightWidth: "1px",
          borderRightColor: defaultThemes.default.divider.default,
        },
      },
    },
    cells: {
      style: {
        "&:not(:last-of-type)": {
          borderRightStyle: "solid",
          borderRightWidth: "1px",
          borderRightColor: defaultThemes.default.divider.default,
        },
      },
    },
  };

  const [selectedRows, setSelectedRows] = useState(false);
  const [toggledClearRows, setToggleClearRows] = useState(false);

  const handleChange = ({ selectedRows }) => {
    setSelectedRows(selectedRows);
    console.log(selectedRows);
  };

  const columns = [
    {
      name: "ID",
      selector: (row) => row.karya_id,
      maxWidth: "20px",
      sortable: true,
      center: true,
      reorder: true,
    },
    {
      name: "Title",
      sortable: true,
      reorder: true,
      selector: (row) => row.title,
      maxWidth: "400px",
    },
    {
      name: "About",
      sortable: true,
      reorder: true,
      selector: (row) => row.about,
      maxWidth: "400px",
    },
    {
      name: "Specification",
      sortable: true,
      reorder: true,
      selector: (row) => row.specification,
      maxWidth: "200px",
    },
    {
      name: "Price",
      sortable: true,
      reorder: true,
      center: true,
      selector: (row) => row.price,
      maxWidth: "100px",
    },
    {
      name: "Image",
      center: true,
      sortable: true,
      reorder: true,
      grow: 0,
      cell: (row) => (
        <img
          src={row.image.split("|")[0]}
          alt="Karya Image"
          className="h-10 w-10 object-cover object-center"
        />
      ),
    },
    {
      name: "Main Category",
      sortable: true,
      reorder: true,
      center: true,
      selector: (row) => row.main_category,
    },
  ];

  return (
    <>
      <section className="relative h-72 bg-gradient-to-br from-primary to-secondary"></section>
      <main className="container mx-auto px-4 pb-8">
        <section className="relative mx-auto  pt-24">
          <div className="absolute -top-14 h-28  w-28 rounded-full">
            <FaRegUserCircle size={112} />
          </div>
          <h1 className="mb-4 text-4xl font-bold">
            {profile.first_name} {profile.middle_name} {profile.last_name}
          </h1>
          <p></p>
          <div className="mb-2 flex items-center gap-4">
            <div>@{profile.username}</div>
            <div className="h-4 w-[2px] bg-primary"></div>
            <div>{profile.email}</div>
            <div className="h-4 w-[2px] bg-primary"></div>
            <div>
              <button
                className="btn btn-ghost btn-sm"
                onClick={() => openModal()}
              >
                Edit Profile
              </button>
            </div>
          </div>
          <hr />
          <div className="mt-4"></div>
        </section>
        <section className="mb-8">
          <Bar
            datasetIdKey="dataset"
            options={{
              plugins: {
                title: {
                  display: true,
                  text: "Most Categories",
                  color: "oklch(0.753513, 0.138989, 232.66148)",
                  fullSize: true,
                  font: {
                    size: 32,
                  },
                },
              },
              indexAxis: "y",
              color: "oklch(0.753513, 0.138989, 232.66148)",
              scales: {
                y: {
                  ticks: {
                    color: "oklch(0.753513, 0.138989, 232.66148)",
                  },
                },
                x: {
                  ticks: {
                    color: "oklch(0.753513, 0.138989, 232.66148)",
                  },
                },
              },
            }}
            data={{
              labels:
                categoryCount && categoryCount.map((c) => c.main_category),
              datasets: [
                {
                  data: categoryCount && categoryCount.map((c) => c.count),
                  backgroundColor: "oklch(0.753513, 0.138989, 232.66148)",
                },
              ],
            }}
          />
        </section>
        <section className=" mx-auto">
          {karya && (
            <DataTable
              title="Karya"
              customStyles={customStyles}
              columns={columns}
              data={filteredItems}
              theme="dark"
              onSelectedRowsChange={handleChange}
              clearSelectedRows={toggledClearRows}
              subHeader
              paginationResetDefaultPage={resetPaginationToggle}
              subHeaderComponent={subHeaderComponentMemo}
              persistTableHead
              selectableRows
              pagination
            />
          )}
        </section>
      </main>
      <dialog id="edit-profile-modal" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-circle btn-ghost btn-sm absolute right-2 top-2">
              X
            </button>
          </form>
          <h3 className="text-lg font-bold">Edit Profile</h3>
          <form onSubmit={handleEditProfile}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Nama Depan</span>
              </label>
              <input
                type="text"
                placeholder="Nama Depan"
                name="first_name"
                defaultValue={profile.first_name}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Nama Tengah</span>
              </label>
              <input
                type="text"
                placeholder="Nama Tengah"
                name="middle_name"
                defaultValue={profile.middle_name}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Nama Belakang</span>
              </label>
              <input
                type="text"
                placeholder="Nama Belakang"
                name="last_name"
                defaultValue={profile.last_name}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Username</span>
              </label>
              <input
                type="text"
                placeholder="Username"
                name="username"
                defaultValue={profile.username}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="Email"
                name="email"
                defaultValue={profile.email}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                name="password"
                defaultValue={profile.password}
                className="input input-bordered"
              />
            </div>
            <button className="btn btn-primary mt-4" type="submit">
              <span>Simpan</span>
            </button>
          </form>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}