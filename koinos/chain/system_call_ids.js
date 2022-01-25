// source: koinos/chain/system_call_ids.proto
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

goog.provide('proto.koinos.chain.system_call_id');

/**
 * @enum {number}
 */
proto.koinos.chain.system_call_id = {
  RESERVED_ID: 0,
  GET_HEAD_INFO: 1,
  APPLY_BLOCK: 2,
  APPLY_TRANSACTION: 3,
  APPLY_UPLOAD_CONTRACT_OPERATION: 4,
  APPLY_CALL_CONTRACT_OPERATION: 5,
  APPLY_SET_SYSTEM_CALL_OPERATION: 6,
  APPLY_SET_SYSTEM_CONTRACT_OPERATION: 7,
  PROCESS_BLOCK_SIGNATURE: 101,
  GET_TRANSACTION_FIELD: 102,
  GET_BLOCK_FIELD: 103,
  GET_LAST_IRREVERSIBLE_BLOCK: 104,
  GET_ACCOUNT_NONCE: 105,
  AUTHORIZE_SYSTEM: 106,
  GET_ACCOUNT_RC: 201,
  CONSUME_ACCOUNT_RC: 202,
  GET_RESOURCE_LIMITS: 203,
  CONSUME_BLOCK_RESOURCES: 204,
  PUT_OBJECT: 301,
  REMOVE_OBJECT: 302,
  GET_OBJECT: 303,
  GET_NEXT_OBJECT: 304,
  GET_PREV_OBJECT: 305,
  LOG: 401,
  EVENT: 402,
  HASH: 501,
  RECOVER_PUBLIC_KEY: 502,
  VERIFY_MERKLE_ROOT: 503,
  VERIFY_SIGNATURE: 504,
  CALL_CONTRACT: 601,
  GET_ENTRY_POINT: 602,
  GET_CONTRACT_ARGUMENTS_SIZE: 603,
  GET_CONTRACT_ARGUMENTS: 604,
  SET_CONTRACT_RESULT: 605,
  EXIT_CONTRACT: 606,
  GET_CONTRACT_ID: 607,
  GET_CALLER: 608,
  REQUIRE_AUTHORITY: 609
};

