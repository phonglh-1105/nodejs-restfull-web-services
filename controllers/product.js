const axios = require('axios');
const getAll = async function (req, res) {
  try {
    const { data } = await axios.get('http://localhost:3000/products');
    if (data.length === 0) {
      return res.status(400).json({ message: 'Không có sản phẩm nào' });
    }
    return res.status(200).json(data);
  } catch (error) {
    return res.json({
      message: error,
    });
  }
};
const remove = async (req, res) => {
  try {
    await axios.delete(`http://localhost:3000/products/${req.params.id}`);
    return res.json({ message: 'Xóa thành công' });
  } catch (error) {
    return res.json({
      message: error,
    });
  }
};
const add = async (req, res) => {
  try {
    const body = req.body;
    const { data } = await axios.post('http://localhost:3000/products', body);
    if (!data) {
      return res.status(400).json({ message: 'Thêm sản phẩm thất bại' });
    }
    return res.json({
      message: 'Thêm sản phẩm thành công',
      data,
    });
  } catch (error) {
    return res.json({
      message: error,
    });
  }
};
const update = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const { data } = await axios.put(
      `http://localhost:3000/products/${id}`,
      body,
    );
    if (!data) {
      return res.status(400).json({ message: 'Cập nhật thất bại' });
    }
    return res.json({
      message: 'Cập nhật thành công',
      data,
    });
  } catch (error) {
    return res.json({
      message: error,
    });
  }
};
const get = async function (req, res) {
  try {
    const { data } = await axios.get(
      `http://localhost:3000/products/${req.params.id}`,
    );
    if (!data) {
      return res.status(400).json({ message: 'Không có sản phẩm nào' });
    }
    return res.json(data);
  } catch (error) {
    return res.json({
      message: error,
    });
  }
};

module.exports = { getAll, remove, add, update, get };
