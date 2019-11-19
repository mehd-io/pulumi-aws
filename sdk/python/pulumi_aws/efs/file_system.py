# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from typing import Union
from .. import utilities, tables

class FileSystem(pulumi.CustomResource):
    arn: pulumi.Output[str]
    """
    Amazon Resource Name of the file system.
    """
    creation_token: pulumi.Output[str]
    """
    A unique name (a maximum of 64 characters are allowed)
    used as reference when creating the Elastic File System to ensure idempotent file
    system creation. By default generated by this provider. See [Elastic File System]
    (http://docs.aws.amazon.com/efs/latest/ug/) user guide for more information.
    """
    dns_name: pulumi.Output[str]
    """
    The DNS name for the filesystem per [documented convention](http://docs.aws.amazon.com/efs/latest/ug/mounting-fs-mount-cmd-dns-name.html).
    """
    encrypted: pulumi.Output[bool]
    """
    If true, the disk will be encrypted.
    """
    kms_key_id: pulumi.Output[str]
    """
    The ARN for the KMS encryption key. When specifying kms_key_id, encrypted needs to be set to true.
    """
    lifecycle_policy: pulumi.Output[dict]
    """
    A file system [lifecycle policy](https://docs.aws.amazon.com/efs/latest/ug/API_LifecyclePolicy.html) object (documented below).
    
      * `transitionToIa` (`str`) - Indicates how long it takes to transition files to the IA storage class. Valid values: `AFTER_7_DAYS`, `AFTER_14_DAYS`, `AFTER_30_DAYS`, `AFTER_60_DAYS`, or `AFTER_90_DAYS`.
    """
    performance_mode: pulumi.Output[str]
    """
    The file system performance mode. Can be either `"generalPurpose"` or `"maxIO"` (Default: `"generalPurpose"`).
    """
    provisioned_throughput_in_mibps: pulumi.Output[float]
    """
    The throughput, measured in MiB/s, that you want to provision for the file system. Only applicable with `throughput_mode` set to `provisioned`.
    """
    tags: pulumi.Output[dict]
    """
    A mapping of tags to assign to the file system.
    """
    throughput_mode: pulumi.Output[str]
    """
    Throughput mode for the file system. Defaults to `bursting`. Valid values: `bursting`, `provisioned`. When using `provisioned`, also set `provisioned_throughput_in_mibps`.
    """
    def __init__(__self__, resource_name, opts=None, creation_token=None, encrypted=None, kms_key_id=None, lifecycle_policy=None, performance_mode=None, provisioned_throughput_in_mibps=None, tags=None, throughput_mode=None, __props__=None, __name__=None, __opts__=None):
        """
        Provides an Elastic File System (EFS) resource.
        
        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] creation_token: A unique name (a maximum of 64 characters are allowed)
               used as reference when creating the Elastic File System to ensure idempotent file
               system creation. By default generated by this provider. See [Elastic File System]
               (http://docs.aws.amazon.com/efs/latest/ug/) user guide for more information.
        :param pulumi.Input[bool] encrypted: If true, the disk will be encrypted.
        :param pulumi.Input[str] kms_key_id: The ARN for the KMS encryption key. When specifying kms_key_id, encrypted needs to be set to true.
        :param pulumi.Input[dict] lifecycle_policy: A file system [lifecycle policy](https://docs.aws.amazon.com/efs/latest/ug/API_LifecyclePolicy.html) object (documented below).
        :param pulumi.Input[str] performance_mode: The file system performance mode. Can be either `"generalPurpose"` or `"maxIO"` (Default: `"generalPurpose"`).
        :param pulumi.Input[float] provisioned_throughput_in_mibps: The throughput, measured in MiB/s, that you want to provision for the file system. Only applicable with `throughput_mode` set to `provisioned`.
        :param pulumi.Input[dict] tags: A mapping of tags to assign to the file system.
        :param pulumi.Input[str] throughput_mode: Throughput mode for the file system. Defaults to `bursting`. Valid values: `bursting`, `provisioned`. When using `provisioned`, also set `provisioned_throughput_in_mibps`.
        
        The **lifecycle_policy** object supports the following:
        
          * `transitionToIa` (`pulumi.Input[str]`) - Indicates how long it takes to transition files to the IA storage class. Valid values: `AFTER_7_DAYS`, `AFTER_14_DAYS`, `AFTER_30_DAYS`, `AFTER_60_DAYS`, or `AFTER_90_DAYS`.

        > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/r/efs_file_system.html.markdown.
        """
        if __name__ is not None:
            warnings.warn("explicit use of __name__ is deprecated", DeprecationWarning)
            resource_name = __name__
        if __opts__ is not None:
            warnings.warn("explicit use of __opts__ is deprecated, use 'opts' instead", DeprecationWarning)
            opts = __opts__
        if opts is None:
            opts = pulumi.ResourceOptions()
        if not isinstance(opts, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')
        if opts.version is None:
            opts.version = utilities.get_version()
        if opts.id is None:
            if __props__ is not None:
                raise TypeError('__props__ is only valid when passed in combination with a valid opts.id to get an existing resource')
            __props__ = dict()

            __props__['creation_token'] = creation_token
            __props__['encrypted'] = encrypted
            __props__['kms_key_id'] = kms_key_id
            __props__['lifecycle_policy'] = lifecycle_policy
            __props__['performance_mode'] = performance_mode
            __props__['provisioned_throughput_in_mibps'] = provisioned_throughput_in_mibps
            __props__['tags'] = tags
            __props__['throughput_mode'] = throughput_mode
            __props__['arn'] = None
            __props__['dns_name'] = None
        super(FileSystem, __self__).__init__(
            'aws:efs/fileSystem:FileSystem',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name, id, opts=None, arn=None, creation_token=None, dns_name=None, encrypted=None, kms_key_id=None, lifecycle_policy=None, performance_mode=None, provisioned_throughput_in_mibps=None, tags=None, throughput_mode=None):
        """
        Get an existing FileSystem resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.
        
        :param str resource_name: The unique name of the resulting resource.
        :param str id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] arn: Amazon Resource Name of the file system.
        :param pulumi.Input[str] creation_token: A unique name (a maximum of 64 characters are allowed)
               used as reference when creating the Elastic File System to ensure idempotent file
               system creation. By default generated by this provider. See [Elastic File System]
               (http://docs.aws.amazon.com/efs/latest/ug/) user guide for more information.
        :param pulumi.Input[str] dns_name: The DNS name for the filesystem per [documented convention](http://docs.aws.amazon.com/efs/latest/ug/mounting-fs-mount-cmd-dns-name.html).
        :param pulumi.Input[bool] encrypted: If true, the disk will be encrypted.
        :param pulumi.Input[str] kms_key_id: The ARN for the KMS encryption key. When specifying kms_key_id, encrypted needs to be set to true.
        :param pulumi.Input[dict] lifecycle_policy: A file system [lifecycle policy](https://docs.aws.amazon.com/efs/latest/ug/API_LifecyclePolicy.html) object (documented below).
        :param pulumi.Input[str] performance_mode: The file system performance mode. Can be either `"generalPurpose"` or `"maxIO"` (Default: `"generalPurpose"`).
        :param pulumi.Input[float] provisioned_throughput_in_mibps: The throughput, measured in MiB/s, that you want to provision for the file system. Only applicable with `throughput_mode` set to `provisioned`.
        :param pulumi.Input[dict] tags: A mapping of tags to assign to the file system.
        :param pulumi.Input[str] throughput_mode: Throughput mode for the file system. Defaults to `bursting`. Valid values: `bursting`, `provisioned`. When using `provisioned`, also set `provisioned_throughput_in_mibps`.
        
        The **lifecycle_policy** object supports the following:
        
          * `transitionToIa` (`pulumi.Input[str]`) - Indicates how long it takes to transition files to the IA storage class. Valid values: `AFTER_7_DAYS`, `AFTER_14_DAYS`, `AFTER_30_DAYS`, `AFTER_60_DAYS`, or `AFTER_90_DAYS`.

        > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/r/efs_file_system.html.markdown.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()
        __props__["arn"] = arn
        __props__["creation_token"] = creation_token
        __props__["dns_name"] = dns_name
        __props__["encrypted"] = encrypted
        __props__["kms_key_id"] = kms_key_id
        __props__["lifecycle_policy"] = lifecycle_policy
        __props__["performance_mode"] = performance_mode
        __props__["provisioned_throughput_in_mibps"] = provisioned_throughput_in_mibps
        __props__["tags"] = tags
        __props__["throughput_mode"] = throughput_mode
        return FileSystem(resource_name, opts=opts, __props__=__props__)
    def translate_output_property(self, prop):
        return tables._CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return tables._SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

