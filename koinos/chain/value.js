// source: koinos/chain/value.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

goog.provide('proto.koinos.chain.enum_value');
goog.provide('proto.koinos.chain.list_value');
goog.provide('proto.koinos.chain.value');
goog.provide('proto.koinos.chain.value.KindCase');
goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.google.protobuf.Any');

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.koinos.chain.value = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.koinos.chain.value.oneofGroups_);
};
goog.inherits(proto.koinos.chain.value, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.koinos.chain.value.displayName = 'proto.koinos.chain.value';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.koinos.chain.enum_value = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.koinos.chain.enum_value, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.koinos.chain.enum_value.displayName = 'proto.koinos.chain.enum_value';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.koinos.chain.list_value = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.koinos.chain.list_value.repeatedFields_, null);
};
goog.inherits(proto.koinos.chain.list_value, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.koinos.chain.list_value.displayName = 'proto.koinos.chain.list_value';
}

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.koinos.chain.value.oneofGroups_ = [[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]];

/**
 * @enum {number}
 */
proto.koinos.chain.value.KindCase = {
  KIND_NOT_SET: 0,
  MESSAGE_VALUE: 1,
  DOUBLE_VALUE: 2,
  FLOAT_VALUE: 3,
  INT32_VALUE: 4,
  INT64_VALUE: 5,
  UINT32_VALUE: 6,
  UINT64_VALUE: 7,
  SINT32_VALUE: 8,
  SINT64_VALUE: 9,
  FIXED32_VALUE: 10,
  FIXED64_VALUE: 11,
  SFIXED32_VALUE: 12,
  SFIXED64_VALUE: 13,
  BOOL_VALUE: 14,
  STRING_VALUE: 15,
  BYTES_VALUE: 16
};

/**
 * @return {proto.koinos.chain.value.KindCase}
 */
proto.koinos.chain.value.prototype.getKindCase = function() {
  return /** @type {proto.koinos.chain.value.KindCase} */(jspb.Message.computeOneofCase(this, proto.koinos.chain.value.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.koinos.chain.value.prototype.toObject = function(opt_includeInstance) {
  return proto.koinos.chain.value.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.koinos.chain.value} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.value.toObject = function(includeInstance, msg) {
  var f, obj = {
    messageValue: (f = msg.getMessageValue()) && proto.google.protobuf.Any.toObject(includeInstance, f),
    doubleValue: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    floatValue: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    int32Value: jspb.Message.getFieldWithDefault(msg, 4, 0),
    int64Value: jspb.Message.getFieldWithDefault(msg, 5, 0),
    uint32Value: jspb.Message.getFieldWithDefault(msg, 6, 0),
    uint64Value: jspb.Message.getFieldWithDefault(msg, 7, 0),
    sint32Value: jspb.Message.getFieldWithDefault(msg, 8, 0),
    sint64Value: jspb.Message.getFieldWithDefault(msg, 9, 0),
    fixed32Value: jspb.Message.getFieldWithDefault(msg, 10, 0),
    fixed64Value: jspb.Message.getFieldWithDefault(msg, 11, 0),
    sfixed32Value: jspb.Message.getFieldWithDefault(msg, 12, 0),
    sfixed64Value: jspb.Message.getFieldWithDefault(msg, 13, 0),
    boolValue: jspb.Message.getBooleanFieldWithDefault(msg, 14, false),
    stringValue: jspb.Message.getFieldWithDefault(msg, 15, ""),
    bytesValue: msg.getBytesValue_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.koinos.chain.value}
 */
proto.koinos.chain.value.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.koinos.chain.value;
  return proto.koinos.chain.value.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.koinos.chain.value} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.koinos.chain.value}
 */
proto.koinos.chain.value.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.google.protobuf.Any;
      reader.readMessage(value,proto.google.protobuf.Any.deserializeBinaryFromReader);
      msg.setMessageValue(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setDoubleValue(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setFloatValue(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setInt32Value(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setInt64Value(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setUint32Value(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setUint64Value(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readSint32());
      msg.setSint32Value(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readSint64());
      msg.setSint64Value(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readFixed32());
      msg.setFixed32Value(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readFixed64());
      msg.setFixed64Value(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readSfixed32());
      msg.setSfixed32Value(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readSfixed64());
      msg.setSfixed64Value(value);
      break;
    case 14:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBoolValue(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setStringValue(value);
      break;
    case 16:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setBytesValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.koinos.chain.value.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.koinos.chain.value.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.koinos.chain.value} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.value.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessageValue();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.google.protobuf.Any.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeFloat(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeUint32(
      6,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeUint64(
      7,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeSint32(
      8,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeSint64(
      9,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeFixed32(
      10,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 11));
  if (f != null) {
    writer.writeFixed64(
      11,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 12));
  if (f != null) {
    writer.writeSfixed32(
      12,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 13));
  if (f != null) {
    writer.writeSfixed64(
      13,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 14));
  if (f != null) {
    writer.writeBool(
      14,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 15));
  if (f != null) {
    writer.writeString(
      15,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 16));
  if (f != null) {
    writer.writeBytes(
      16,
      f
    );
  }
};


/**
 * optional google.protobuf.Any message_value = 1;
 * @return {?proto.google.protobuf.Any}
 */
proto.koinos.chain.value.prototype.getMessageValue = function() {
  return /** @type{?proto.google.protobuf.Any} */ (
    jspb.Message.getWrapperField(this, proto.google.protobuf.Any, 1));
};


/**
 * @param {?proto.google.protobuf.Any|undefined} value
 * @return {!proto.koinos.chain.value} returns this
*/
proto.koinos.chain.value.prototype.setMessageValue = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.koinos.chain.value.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.koinos.chain.value} returns this
 */
proto.koinos.chain.value.prototype.clearMessageValue = function() {
  return this.setMessageValue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.koinos.chain.value.prototype.hasMessageValue = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional double double_value = 2;
 * @return {number}
 */
proto.koinos.chain.value.prototype.getDoubleValue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.koinos.chain.value} returns this
 */
proto.koinos.chain.value.prototype.setDoubleValue = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.koinos.chain.value.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.koinos.chain.value} returns this
 */
proto.koinos.chain.value.prototype.clearDoubleValue = function() {
  return jspb.Message.setOneofField(this, 2, proto.koinos.chain.value.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.koinos.chain.value.prototype.hasDoubleValue = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional float float_value = 3;
 * @return {number}
 */
proto.koinos.chain.value.prototype.getFloatValue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.koinos.chain.value} returns this
 */
proto.koinos.chain.value.prototype.setFloatValue = function(value) {
  return jspb.Message.setOneofField(this, 3, proto.koinos.chain.value.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.koinos.chain.value} returns this
 */
proto.koinos.chain.value.prototype.clearFloatValue = function() {
  return jspb.Message.setOneofField(this, 3, proto.koinos.chain.value.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.koinos.chain.value.prototype.hasFloatValue = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 int32_value = 4;
 * @return {number}
 */
proto.koinos.chain.value.prototype.getInt32Value = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.koinos.chain.value} returns this
 */
proto.koinos.chain.value.prototype.setInt32Value = function(value) {
  return jspb.Message.setOneofField(this, 4, proto.koinos.chain.value.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.koinos.chain.value} returns this
 */
proto.koinos.chain.value.prototype.clearInt32Value = function() {
  return jspb.Message.setOneofField(this, 4, proto.koinos.chain.value.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.koinos.chain.value.prototype.hasInt32Value = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional int64 int64_value = 5;
 * @return {number}
 */
proto.koinos.chain.value.prototype.getInt64Value = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.koinos.chain.value} returns this
 */
proto.koinos.chain.value.prototype.setInt64Value = function(value) {
  return jspb.Message.setOneofField(this, 5, proto.koinos.chain.value.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.koinos.chain.value} returns this
 */
proto.koinos.chain.value.prototype.clearInt64Value = function() {
  return jspb.Message.setOneofField(this, 5, proto.koinos.chain.value.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.koinos.chain.value.prototype.hasInt64Value = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional uint32 uint32_value = 6;
 * @return {number}
 */
proto.koinos.chain.value.prototype.getUint32Value = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.koinos.chain.value} returns this
 */
proto.koinos.chain.value.prototype.setUint32Value = function(value) {
  return jspb.Message.setOneofField(this, 6, proto.koinos.chain.value.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.koinos.chain.value} returns this
 */
proto.koinos.chain.value.prototype.clearUint32Value = function() {
  return jspb.Message.setOneofField(this, 6, proto.koinos.chain.value.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.koinos.chain.value.prototype.hasUint32Value = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional uint64 uint64_value = 7;
 * @return {number}
 */
proto.koinos.chain.value.prototype.getUint64Value = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.koinos.chain.value} returns this
 */
proto.koinos.chain.value.prototype.setUint64Value = function(value) {
  return jspb.Message.setOneofField(this, 7, proto.koinos.chain.value.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.koinos.chain.value} returns this
 */
proto.koinos.chain.value.prototype.clearUint64Value = function() {
  return jspb.Message.setOneofField(this, 7, proto.koinos.chain.value.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.koinos.chain.value.prototype.hasUint64Value = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional sint32 sint32_value = 8;
 * @return {number}
 */
proto.koinos.chain.value.prototype.getSint32Value = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.koinos.chain.value} returns this
 */
proto.koinos.chain.value.prototype.setSint32Value = function(value) {
  return jspb.Message.setOneofField(this, 8, proto.koinos.chain.value.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.koinos.chain.value} returns this
 */
proto.koinos.chain.value.prototype.clearSint32Value = function() {
  return jspb.Message.setOneofField(this, 8, proto.koinos.chain.value.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.koinos.chain.value.prototype.hasSint32Value = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional sint64 sint64_value = 9;
 * @return {number}
 */
proto.koinos.chain.value.prototype.getSint64Value = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.koinos.chain.value} returns this
 */
proto.koinos.chain.value.prototype.setSint64Value = function(value) {
  return jspb.Message.setOneofField(this, 9, proto.koinos.chain.value.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.koinos.chain.value} returns this
 */
proto.koinos.chain.value.prototype.clearSint64Value = function() {
  return jspb.Message.setOneofField(this, 9, proto.koinos.chain.value.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.koinos.chain.value.prototype.hasSint64Value = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional fixed32 fixed32_value = 10;
 * @return {number}
 */
proto.koinos.chain.value.prototype.getFixed32Value = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.koinos.chain.value} returns this
 */
proto.koinos.chain.value.prototype.setFixed32Value = function(value) {
  return jspb.Message.setOneofField(this, 10, proto.koinos.chain.value.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.koinos.chain.value} returns this
 */
proto.koinos.chain.value.prototype.clearFixed32Value = function() {
  return jspb.Message.setOneofField(this, 10, proto.koinos.chain.value.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.koinos.chain.value.prototype.hasFixed32Value = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional fixed64 fixed64_value = 11;
 * @return {number}
 */
proto.koinos.chain.value.prototype.getFixed64Value = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.koinos.chain.value} returns this
 */
proto.koinos.chain.value.prototype.setFixed64Value = function(value) {
  return jspb.Message.setOneofField(this, 11, proto.koinos.chain.value.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.koinos.chain.value} returns this
 */
proto.koinos.chain.value.prototype.clearFixed64Value = function() {
  return jspb.Message.setOneofField(this, 11, proto.koinos.chain.value.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.koinos.chain.value.prototype.hasFixed64Value = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional sfixed32 sfixed32_value = 12;
 * @return {number}
 */
proto.koinos.chain.value.prototype.getSfixed32Value = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.koinos.chain.value} returns this
 */
proto.koinos.chain.value.prototype.setSfixed32Value = function(value) {
  return jspb.Message.setOneofField(this, 12, proto.koinos.chain.value.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.koinos.chain.value} returns this
 */
proto.koinos.chain.value.prototype.clearSfixed32Value = function() {
  return jspb.Message.setOneofField(this, 12, proto.koinos.chain.value.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.koinos.chain.value.prototype.hasSfixed32Value = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional sfixed64 sfixed64_value = 13;
 * @return {number}
 */
proto.koinos.chain.value.prototype.getSfixed64Value = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {number} value
 * @return {!proto.koinos.chain.value} returns this
 */
proto.koinos.chain.value.prototype.setSfixed64Value = function(value) {
  return jspb.Message.setOneofField(this, 13, proto.koinos.chain.value.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.koinos.chain.value} returns this
 */
proto.koinos.chain.value.prototype.clearSfixed64Value = function() {
  return jspb.Message.setOneofField(this, 13, proto.koinos.chain.value.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.koinos.chain.value.prototype.hasSfixed64Value = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional bool bool_value = 14;
 * @return {boolean}
 */
proto.koinos.chain.value.prototype.getBoolValue = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 14, false));
};


/**
 * @param {boolean} value
 * @return {!proto.koinos.chain.value} returns this
 */
proto.koinos.chain.value.prototype.setBoolValue = function(value) {
  return jspb.Message.setOneofField(this, 14, proto.koinos.chain.value.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.koinos.chain.value} returns this
 */
proto.koinos.chain.value.prototype.clearBoolValue = function() {
  return jspb.Message.setOneofField(this, 14, proto.koinos.chain.value.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.koinos.chain.value.prototype.hasBoolValue = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional string string_value = 15;
 * @return {string}
 */
proto.koinos.chain.value.prototype.getStringValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * @param {string} value
 * @return {!proto.koinos.chain.value} returns this
 */
proto.koinos.chain.value.prototype.setStringValue = function(value) {
  return jspb.Message.setOneofField(this, 15, proto.koinos.chain.value.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.koinos.chain.value} returns this
 */
proto.koinos.chain.value.prototype.clearStringValue = function() {
  return jspb.Message.setOneofField(this, 15, proto.koinos.chain.value.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.koinos.chain.value.prototype.hasStringValue = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional bytes bytes_value = 16;
 * @return {!(string|Uint8Array)}
 */
proto.koinos.chain.value.prototype.getBytesValue = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * optional bytes bytes_value = 16;
 * This is a type-conversion wrapper around `getBytesValue()`
 * @return {string}
 */
proto.koinos.chain.value.prototype.getBytesValue_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getBytesValue()));
};


/**
 * optional bytes bytes_value = 16;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getBytesValue()`
 * @return {!Uint8Array}
 */
proto.koinos.chain.value.prototype.getBytesValue_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getBytesValue()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.koinos.chain.value} returns this
 */
proto.koinos.chain.value.prototype.setBytesValue = function(value) {
  return jspb.Message.setOneofField(this, 16, proto.koinos.chain.value.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.koinos.chain.value} returns this
 */
proto.koinos.chain.value.prototype.clearBytesValue = function() {
  return jspb.Message.setOneofField(this, 16, proto.koinos.chain.value.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.koinos.chain.value.prototype.hasBytesValue = function() {
  return jspb.Message.getField(this, 16) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.koinos.chain.enum_value.prototype.toObject = function(opt_includeInstance) {
  return proto.koinos.chain.enum_value.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.koinos.chain.enum_value} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.enum_value.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    number: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.koinos.chain.enum_value}
 */
proto.koinos.chain.enum_value.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.koinos.chain.enum_value;
  return proto.koinos.chain.enum_value.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.koinos.chain.enum_value} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.koinos.chain.enum_value}
 */
proto.koinos.chain.enum_value.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNumber(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.koinos.chain.enum_value.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.koinos.chain.enum_value.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.koinos.chain.enum_value} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.enum_value.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getNumber();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.koinos.chain.enum_value.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.koinos.chain.enum_value} returns this
 */
proto.koinos.chain.enum_value.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 number = 2;
 * @return {number}
 */
proto.koinos.chain.enum_value.prototype.getNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.koinos.chain.enum_value} returns this
 */
proto.koinos.chain.enum_value.prototype.setNumber = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.koinos.chain.list_value.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.koinos.chain.list_value.prototype.toObject = function(opt_includeInstance) {
  return proto.koinos.chain.list_value.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.koinos.chain.list_value} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.list_value.toObject = function(includeInstance, msg) {
  var f, obj = {
    valueList: jspb.Message.toObjectList(msg.getValueList(),
    proto.koinos.chain.value.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.koinos.chain.list_value}
 */
proto.koinos.chain.list_value.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.koinos.chain.list_value;
  return proto.koinos.chain.list_value.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.koinos.chain.list_value} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.koinos.chain.list_value}
 */
proto.koinos.chain.list_value.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.koinos.chain.value;
      reader.readMessage(value,proto.koinos.chain.value.deserializeBinaryFromReader);
      msg.addValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.koinos.chain.list_value.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.koinos.chain.list_value.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.koinos.chain.list_value} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.koinos.chain.list_value.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValueList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.koinos.chain.value.serializeBinaryToWriter
    );
  }
};


/**
 * repeated value value = 1;
 * @return {!Array<!proto.koinos.chain.value>}
 */
proto.koinos.chain.list_value.prototype.getValueList = function() {
  return /** @type{!Array<!proto.koinos.chain.value>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.koinos.chain.value, 1));
};


/**
 * @param {!Array<!proto.koinos.chain.value>} value
 * @return {!proto.koinos.chain.list_value} returns this
*/
proto.koinos.chain.list_value.prototype.setValueList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.koinos.chain.value=} opt_value
 * @param {number=} opt_index
 * @return {!proto.koinos.chain.value}
 */
proto.koinos.chain.list_value.prototype.addValue = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.koinos.chain.value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.koinos.chain.list_value} returns this
 */
proto.koinos.chain.list_value.prototype.clearValueList = function() {
  return this.setValueList([]);
};

