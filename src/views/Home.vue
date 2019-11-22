<template>
  <a-table :columns="columns" :dataSource="data" :scroll="{ x: 1300 }">
    <a slot="action" href="javascript:;">action</a>
    <a-button slot="operation" type="primary">Primary</a-button>
    <a-button slot="operation">Default</a-button>
    <a-button slot="operation" type="dashed">Dashed</a-button>
    <a-button slot="operation" type="danger">Danger</a-button>
  </a-table>
</template>
<script>
const columns = [
  {
    title: "Full Name",
    dataIndex: "name",
    key: "name"
  },
  { title: "Column 1", dataIndex: "address", key: "1" },
  { title: "Column 2", dataIndex: "address", key: "2" },
  { title: "Column 3", dataIndex: "address", key: "3" },
  { title: "Column 4", dataIndex: "address", key: "4" },
  { title: "Column 5", dataIndex: "address", key: "5" },
  { title: "Column 6", dataIndex: "address", key: "6" },
  { title: "Column 7", dataIndex: "address", key: "7" },
  { title: "Column 8", dataIndex: "address", key: "8" },
  {
    title: "Action",
    key: "operation",
    scopedSlots: { customRender: "action" }
  },
  {
    title: "Action",
    key: "operation",
    scopedSlots: { customRender: "operation" }
  }
];

const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York Park"
  },
  {
    key: "2",
    name: "Jim Green",
    age: 40,
    address: "London Park"
  }
];

export default {
  data() {
    return {
      data,
      columns
    };
  }
};
</script>
