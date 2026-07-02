import Field from "../models/Field.js";

// Create Field
export const createField = async (req, res) => {
  try {
    const { fieldName, location, area, soilType, irrigationType } = req.body;

    const field = await Field.create({
      user: req.user.id,
      fieldName,
      location,
      area,
      soilType,
      irrigationType,
    });

    res.status(201).json({
      success: true,
      message: "Field created successfully",
      field,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get All Fields
export const getFields = async (req, res) => {
  try {
    const fields = await Field.find({ user: req.user.id });

    res.status(200).json({
      success: true,
      count: fields.length,
      fields,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get Single Field
export const getFieldById = async (req, res) => {
  try {
    const field = await Field.findOne({
      _id: req.params.id,
      user: req.user.id,
    });

    if (!field) {
      return res.status(404).json({
        success: false,
        message: "Field not found",
      });
    }

    res.status(200).json({
      success: true,
      field,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Update Field
export const updateField = async (req, res) => {
  try {
    const field = await Field.findOne({
      _id: req.params.id,
      user: req.user.id,
    });

    if (!field) {
      return res.status(404).json({
        success: false,
        message: "Field not found",
      });
    }

    const updatedField = await Field.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    res.status(200).json({
      success: true,
      message: "Field updated successfully",
      field: updatedField,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete Field
export const deleteField = async (req, res) => {
  try {
    const field = await Field.findOne({
      _id: req.params.id,
      user: req.user.id,
    });

    if (!field) {
      return res.status(404).json({
        success: false,
        message: "Field not found",
      });
    }

    await Field.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Field deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};