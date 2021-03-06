# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import warnings
import pulumi
import pulumi.runtime
from typing import Any, Mapping, Optional, Sequence, Union
from .. import _utilities, _tables

__all__ = ['VideoStream']


class VideoStream(pulumi.CustomResource):
    def __init__(__self__,
                 resource_name: str,
                 opts: Optional[pulumi.ResourceOptions] = None,
                 data_retention_in_hours: Optional[pulumi.Input[int]] = None,
                 device_name: Optional[pulumi.Input[str]] = None,
                 kms_key_id: Optional[pulumi.Input[str]] = None,
                 media_type: Optional[pulumi.Input[str]] = None,
                 name: Optional[pulumi.Input[str]] = None,
                 tags: Optional[pulumi.Input[Mapping[str, pulumi.Input[str]]]] = None,
                 __props__=None,
                 __name__=None,
                 __opts__=None):
        """
        Provides a Kinesis Video Stream resource. Amazon Kinesis Video Streams makes it easy to securely stream video from connected devices to AWS for analytics, machine learning (ML), playback, and other processing.

        For more details, see the [Amazon Kinesis Documentation](https://aws.amazon.com/documentation/kinesis/).

        ## Example Usage

        ```python
        import pulumi
        import pulumi_aws as aws

        default = aws.kinesis.VideoStream("default",
            data_retention_in_hours=1,
            device_name="kinesis-video-device-name",
            media_type="video/h264",
            tags={
                "Name": "kinesis-video-stream",
            })
        ```

        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[int] data_retention_in_hours: The number of hours that you want to retain the data in the stream. Kinesis Video Streams retains the data in a data store that is associated with the stream. The default value is `0`, indicating that the stream does not persist data.
        :param pulumi.Input[str] device_name: The name of the device that is writing to the stream. **In the current implementation, Kinesis Video Streams does not use this name.**
        :param pulumi.Input[str] kms_key_id: The ID of the AWS Key Management Service (AWS KMS) key that you want Kinesis Video Streams to use to encrypt stream data. If no key ID is specified, the default, Kinesis Video-managed key (`aws/kinesisvideo`) is used.
        :param pulumi.Input[str] media_type: The media type of the stream. Consumers of the stream can use this information when processing the stream. For more information about media types, see [Media Types](http://www.iana.org/assignments/media-types/media-types.xhtml). If you choose to specify the MediaType, see [Naming Requirements](https://tools.ietf.org/html/rfc6838#section-4.2) for guidelines.
        :param pulumi.Input[str] name: A name to identify the stream. This is unique to the
               AWS account and region the Stream is created in.
        :param pulumi.Input[Mapping[str, pulumi.Input[str]]] tags: A map of tags to assign to the resource.
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
            opts.version = _utilities.get_version()
        if opts.id is None:
            if __props__ is not None:
                raise TypeError('__props__ is only valid when passed in combination with a valid opts.id to get an existing resource')
            __props__ = dict()

            __props__['data_retention_in_hours'] = data_retention_in_hours
            __props__['device_name'] = device_name
            __props__['kms_key_id'] = kms_key_id
            __props__['media_type'] = media_type
            __props__['name'] = name
            __props__['tags'] = tags
            __props__['arn'] = None
            __props__['creation_time'] = None
            __props__['version'] = None
        super(VideoStream, __self__).__init__(
            'aws:kinesis/videoStream:VideoStream',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name: str,
            id: pulumi.Input[str],
            opts: Optional[pulumi.ResourceOptions] = None,
            arn: Optional[pulumi.Input[str]] = None,
            creation_time: Optional[pulumi.Input[str]] = None,
            data_retention_in_hours: Optional[pulumi.Input[int]] = None,
            device_name: Optional[pulumi.Input[str]] = None,
            kms_key_id: Optional[pulumi.Input[str]] = None,
            media_type: Optional[pulumi.Input[str]] = None,
            name: Optional[pulumi.Input[str]] = None,
            tags: Optional[pulumi.Input[Mapping[str, pulumi.Input[str]]]] = None,
            version: Optional[pulumi.Input[str]] = None) -> 'VideoStream':
        """
        Get an existing VideoStream resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.

        :param str resource_name: The unique name of the resulting resource.
        :param pulumi.Input[str] id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] arn: The Amazon Resource Name (ARN) specifying the Stream (same as `id`)
        :param pulumi.Input[str] creation_time: A time stamp that indicates when the stream was created.
        :param pulumi.Input[int] data_retention_in_hours: The number of hours that you want to retain the data in the stream. Kinesis Video Streams retains the data in a data store that is associated with the stream. The default value is `0`, indicating that the stream does not persist data.
        :param pulumi.Input[str] device_name: The name of the device that is writing to the stream. **In the current implementation, Kinesis Video Streams does not use this name.**
        :param pulumi.Input[str] kms_key_id: The ID of the AWS Key Management Service (AWS KMS) key that you want Kinesis Video Streams to use to encrypt stream data. If no key ID is specified, the default, Kinesis Video-managed key (`aws/kinesisvideo`) is used.
        :param pulumi.Input[str] media_type: The media type of the stream. Consumers of the stream can use this information when processing the stream. For more information about media types, see [Media Types](http://www.iana.org/assignments/media-types/media-types.xhtml). If you choose to specify the MediaType, see [Naming Requirements](https://tools.ietf.org/html/rfc6838#section-4.2) for guidelines.
        :param pulumi.Input[str] name: A name to identify the stream. This is unique to the
               AWS account and region the Stream is created in.
        :param pulumi.Input[Mapping[str, pulumi.Input[str]]] tags: A map of tags to assign to the resource.
        :param pulumi.Input[str] version: The version of the stream.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = dict()

        __props__["arn"] = arn
        __props__["creation_time"] = creation_time
        __props__["data_retention_in_hours"] = data_retention_in_hours
        __props__["device_name"] = device_name
        __props__["kms_key_id"] = kms_key_id
        __props__["media_type"] = media_type
        __props__["name"] = name
        __props__["tags"] = tags
        __props__["version"] = version
        return VideoStream(resource_name, opts=opts, __props__=__props__)

    @property
    @pulumi.getter
    def arn(self) -> pulumi.Output[str]:
        """
        The Amazon Resource Name (ARN) specifying the Stream (same as `id`)
        """
        return pulumi.get(self, "arn")

    @property
    @pulumi.getter(name="creationTime")
    def creation_time(self) -> pulumi.Output[str]:
        """
        A time stamp that indicates when the stream was created.
        """
        return pulumi.get(self, "creation_time")

    @property
    @pulumi.getter(name="dataRetentionInHours")
    def data_retention_in_hours(self) -> pulumi.Output[Optional[int]]:
        """
        The number of hours that you want to retain the data in the stream. Kinesis Video Streams retains the data in a data store that is associated with the stream. The default value is `0`, indicating that the stream does not persist data.
        """
        return pulumi.get(self, "data_retention_in_hours")

    @property
    @pulumi.getter(name="deviceName")
    def device_name(self) -> pulumi.Output[Optional[str]]:
        """
        The name of the device that is writing to the stream. **In the current implementation, Kinesis Video Streams does not use this name.**
        """
        return pulumi.get(self, "device_name")

    @property
    @pulumi.getter(name="kmsKeyId")
    def kms_key_id(self) -> pulumi.Output[str]:
        """
        The ID of the AWS Key Management Service (AWS KMS) key that you want Kinesis Video Streams to use to encrypt stream data. If no key ID is specified, the default, Kinesis Video-managed key (`aws/kinesisvideo`) is used.
        """
        return pulumi.get(self, "kms_key_id")

    @property
    @pulumi.getter(name="mediaType")
    def media_type(self) -> pulumi.Output[Optional[str]]:
        """
        The media type of the stream. Consumers of the stream can use this information when processing the stream. For more information about media types, see [Media Types](http://www.iana.org/assignments/media-types/media-types.xhtml). If you choose to specify the MediaType, see [Naming Requirements](https://tools.ietf.org/html/rfc6838#section-4.2) for guidelines.
        """
        return pulumi.get(self, "media_type")

    @property
    @pulumi.getter
    def name(self) -> pulumi.Output[str]:
        """
        A name to identify the stream. This is unique to the
        AWS account and region the Stream is created in.
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter
    def tags(self) -> pulumi.Output[Optional[Mapping[str, str]]]:
        """
        A map of tags to assign to the resource.
        """
        return pulumi.get(self, "tags")

    @property
    @pulumi.getter
    def version(self) -> pulumi.Output[str]:
        """
        The version of the stream.
        """
        return pulumi.get(self, "version")

    def translate_output_property(self, prop):
        return _tables.CAMEL_TO_SNAKE_CASE_TABLE.get(prop) or prop

    def translate_input_property(self, prop):
        return _tables.SNAKE_TO_CAMEL_CASE_TABLE.get(prop) or prop

