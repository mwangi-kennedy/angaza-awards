class ApiResponse {
  static success(res, data = null, message = 'Success', statusCode = 200) {
    return res.status(statusCode).json({
      success: true,
      status: statusCode,
      message,
      data,
    });
  }

  static created(res, data = null, message = 'Created successfully') {
    return ApiResponse.success(res, data, message, 201);
  }

  static paginated(res, data, total, page, limit, message = 'Success') {
    return res.status(200).json({
      success: true,
      status: 200,
      message,
      data,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
        hasNextPage: page * limit < total,
        hasPrevPage: page > 1,
      },
    });
  }

  static noContent(res) {
    return res.status(204).send();
  }
}

export default ApiResponse;
